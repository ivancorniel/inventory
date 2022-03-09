from dataclasses import field
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Product, Transaction


class ProductSerilizer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class TransactionSerilizer(ModelSerializer):
    product = serializers.SlugRelatedField(slug_field="title", queryset=Product.objects.all())  
    created_by = serializers.SlugRelatedField(slug_field="username", queryset=User.objects.all())

    class Meta:
        model = Transaction
        fields = ('id', 'transaction_date', 'product', 'transaction_type', 'amount', 'notes', 'created_by')
    
            