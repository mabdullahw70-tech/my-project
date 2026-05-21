# api/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, CartItem
from .serializers import ProductSerializer, CartItemSerializer

@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_to_cart(request):
    product_id = request.data.get('product_id')
    
    # ✅ YAHAN 1 PRINT LAGAYEN
    print("REACT SE YE PRODUCT ID AAYI HAI 👉:", product_id)
    
    try:
        product = Product.objects.get(id=product_id)
        cart_item, created = CartItem.objects.get_or_create(product=product)
        
        if not created:
            cart_item.quantity += 1
            cart_item.save()
            
        return Response({"message": "Product cart mein add ho gayi!", "quantity": cart_item.quantity})
        
    except Product.DoesNotExist:
        # ✅ YAHAN DUSRA PRINT LAGAYEN
        print("DATABASE ERROR 👉: Is ID ka koi product database me nahi mila!")
        return Response({"error": "Product nahi mili"}, status=404)

@api_view(['GET'])
def get_cart_items(request):
    cart_items = CartItem.objects.all() # Simple logic. Agar user login ho toh: CartItem.objects.filter(user=request.user)
    serializer = CartItemSerializer(cart_items, many=True)
    return Response(serializer.data)

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

@api_view(['DELETE'])
def remove_cart_item(request, item_id):
    try:
        cart_item = CartItem.objects.get(id=item_id)
        cart_item.delete()
        return Response({"message": "Item removed"})
    except CartItem.DoesNotExist:
        return Response({"error": "Item not found"}, status=404)