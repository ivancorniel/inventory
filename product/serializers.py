from dataclasses import field
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import Product, Transaction


class ProductSerilizer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class TransactionSerilizer(ModelSerializer):
    product = serializers.SlugRelatedField(slug_field="title", read_only=True)    
    created_by = serializers.SlugRelatedField(slug_field="username", read_only=True)

    class Meta:
        
        model = Transaction
        fields = 'id', 'transaction_date', 'product', 'transaction_type', 'amount', 'notes', 'product', 'created_by', 'created_by'
