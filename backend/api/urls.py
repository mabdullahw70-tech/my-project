# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # ✅ Naya URL taake purani app se clash na ho
    path('shop-products/', views.get_products, name='get_products'),
    
    # Cart ke URLs
    path('cart/add/', views.add_to_cart, name='add_to_cart'), 
    path('cart/', views.get_cart_items, name='get_cart_items'),
    path('cart/update/', views.update_cart_quantity, name='update_cart_quantity'),
    path('cart/remove/<int:item_id>/', views.remove_cart_item, name='remove_cart_item'),
]