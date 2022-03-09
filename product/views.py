from urllib import request
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics, permissions

from django.db.models.signals import post_save

from .serializers import ProductSerilizer, TransactionSerilizer
from .models import Product, Transaction


class ProductsListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerilizer


class ProductCreateView(generics.CreateAPIView):
    serializer_class = ProductSerilizer
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Product.objects.all() 

class ProductUpdateView(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerilizer
    permission_classes = (permissions.IsAuthenticated,)


class ProductDetailsView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerilizer
    permission_classes = (permissions.IsAuthenticated,)


class TransactionListView(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerilizer


class TransactionCreateView(generics.CreateAPIView):
    serializer_class = TransactionSerilizer
    permission_classes = (permissions.IsAuthenticated,)


class TransactionDetailsView(generics.RetrieveAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerilizer
    permission_classes = (permissions.IsAuthenticated,)

