# api/urls.py
from django.urls import path
from . import views
from . import views, dashboard_views # dashboard_views import kiya

urlpatterns = [
    # ✅ Naya URL taake purani app se clash na ho
    path('shop-products/', views.get_products, name='get_products'),
    
    # Cart ke URLs
    path('cart/add/', views.add_to_cart, name='add_to_cart'), 
    path('cart/', views.get_cart_items, name='get_cart_items'),
    path('cart/update/', views.update_cart_quantity, name='update_cart_quantity'),
    path('cart/remove/<int:item_id>/', views.remove_cart_item, name='remove_cart_item'),
    path('dashboard-stats/', views.get_dashboard_stats, name='dashboard-stats'),
    path('orders/', views.get_orders, name='get-orders'),
    path('update-order-status/', views.update_order_status, name='update-order-status'),
    path('add-product/', views.add_product, name='add-product'),
    path('product/delete/<int:pk>/', views.delete_product, name='delete-product'),
    path('create-order/', views.create_order, name='create-order'),
    path('update-profile/', views.update_profile, name='update-profile'),
    path('get-profile/', views.get_profile, name='get-profile'),
]