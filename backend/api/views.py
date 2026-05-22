from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django.db.models import Sum
from django.contrib.auth import get_user_model # ✅ Yeh function har tarah ke user model ke sath kaam karta hai
User = get_user_model() # ✅ Yahan aapka CustomUser automatically load ho jayega

from .models import Product, CartItem, Order
from .serializers import ProductSerializer, CartItemSerializer, OrderSerializer

# --- PRODUCT MANAGEMENT ---
@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def add_product(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
def delete_product(request, pk):
    try:
        product = Product.objects.get(id=pk)
        product.delete()
        return Response({"message": "Product deleted"})
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)

# --- CART MANAGEMENT ---
@api_view(['POST'])
def add_to_cart(request):
    product_id = request.data.get('product_id')
    frontend_quantity = int(request.data.get('quantity', 1))
    try:
        product = Product.objects.get(id=product_id)
        cart_item, created = CartItem.objects.get_or_create(product=product)
        if not created:
            cart_item.quantity += frontend_quantity
        else:
            cart_item.quantity = frontend_quantity
        cart_item.save()
        return Response({"message": "Product added to cart", "quantity": cart_item.quantity})
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)
@api_view(['DELETE'])
def remove_cart_item(request, item_id):
    try:
        cart_item = CartItem.objects.get(id=item_id)
        cart_item.delete()
        return Response({"message": "Item removed"})
    except CartItem.DoesNotExist:
        return Response({"error": "Item not found"}, status=404)
@api_view(['POST'])
def update_cart_quantity(request):
    item_id = request.data.get('item_id')
    quantity = request.data.get('quantity')
    try:
        cart_item = CartItem.objects.get(id=item_id)
        cart_item.quantity = int(quantity)
        cart_item.save()
        return Response({"message": "Quantity updated"})
    except CartItem.DoesNotExist:
        return Response({"error": "Item not found"}, status=404)

@api_view(['GET'])
def get_cart_items(request):
    cart_items = CartItem.objects.all()
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data)

# --- DASHBOARD & ORDER MANAGEMENT ---
@api_view(['GET'])
def get_dashboard_stats(request):
    total_orders = Order.objects.count()
    total_products = Product.objects.count()
    pending_deliveries = Order.objects.filter(status='Pending').count()
    revenue = Order.objects.aggregate(total=Sum('total_price'))['total'] or 0
    return Response({
        "total_orders": total_orders,
        "total_products": total_products,
        "pending_deliveries": pending_deliveries,
        "revenue": float(revenue)
    })

@api_view(['GET'])
def get_orders(request):
    orders = Order.objects.all().order_by('-created_at')
    data = [{
        "id": o.id,
        "date": o.created_at.strftime("%d %b %Y"),
        "status": o.status,
        "price": f"${o.total_price}"
    } for o in orders]
    return Response(data)

@api_view(['POST'])
def update_order_status(request):
    order_id = request.data.get('order_id')
    new_status = request.data.get('status')
    try:
        order = Order.objects.get(id=order_id)
        order.status = new_status
        order.save()
        return Response({"message": "Status updated"})
    except Order.DoesNotExist:
        return Response({"error": "Order not found"}, status=404)

@api_view(['POST'])
def create_order(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Order created successfully!"}, status=201)
    return Response(serializer.errors, status=400)
@api_view(['POST'])
def update_profile(request):
    try:
        # User ko dhoondne ka tareeqa (agar admin ek hi hai)
        user = User.objects.first() 
        if not user:
            return Response({"error": "User not found"}, status=404)
            
        user.first_name = request.data.get('first_name', user.first_name)
        user.email = request.data.get('email', user.email)
        user.save()
        return Response({"message": "Profile updated successfully!"})
    except Exception as e:
        print("ERROR DETAILS:", str(e)) # Yeh Django terminal mein error dikhayega
        return Response({"error": str(e)}, status=500)
    
@api_view(['GET'])
def get_profile(request):
    user = User.objects.first() # Ya current logged-in user
    if not user:
        return Response({"error": "User not found"}, status=404)
    return Response({
        "first_name": user.first_name,
        "email": user.email
    })