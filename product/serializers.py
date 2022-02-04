from dataclasses import field
from rest_framework.serializers import ModelSerializer

from .models import Product, Transaction


class ProductSerilizer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class TransactionSerilizer(ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'