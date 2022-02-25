from dataclasses import field
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import Product, Transaction


class ProductSerilizer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class TransactionSerilizer(ModelSerializer):
    product_id = serializers.PrimaryKeyRelatedField(read_only=True)    
    created_by = serializers.SlugRelatedField(slug_field="username", read_only=True)

    class Meta:
        model = Transaction
        fields = 'id', 'transaction_date', 'product_id', 'transaction_type', 'amount', 'notes', 'product', 'created_by', 'created_by'
