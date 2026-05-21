# api/models.py
from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100) # (e.g., 'strawberry', 'lemon')
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    
    def __str__(self):
        return self.name

class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    session_key = models.CharField(max_length=255, null=True, blank=True) # Bina login cart save karne ke liye

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"