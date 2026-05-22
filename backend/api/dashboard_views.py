# api/dashboard_views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Order, Product

@api_view(['GET'])
def get_dashboard_stats(request):
    # Stats calculate ho rahe hain
    stats = {
        "total_orders": Order.objects.count(),
        "total_products": Product.objects.count(),
        "pending_deliveries": Order.objects.filter(status='Pending').count(),
    }
    return Response(stats)
  # api/dashboard_views.py
@api_view(['GET'])
def get_orders(request):
    # Order model se saara data uthaein
    orders = Order.objects.all().order_by('-created_at')
    # Yahan hum manual list bana rahe hain taake frontend ko jaisa format chahiye waisa mile
    data = [{
        "id": f"#{o.id}",
        "date": o.created_at.strftime("%d %b %Y"),
        "status": o.status,
        "price": f"${o.total_price}"
    } for o in orders]
    return Response(data)