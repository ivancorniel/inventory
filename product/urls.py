from django.urls import path

from .views import ProductsListView, ProductCreateView, ProductUpdateView, ProductDetailsView, TransactionListView, TransactionCreateView, TransactionDetailsView


urlpatterns = [
    path('api/products_list', ProductsListView.as_view()),
    path('api/product_update/<int:pk>', ProductUpdateView.as_view()),
    path('api/protuct_create', ProductCreateView.as_view()),
    path('api/product_details/<int:pk>', ProductDetailsView.as_view()),
    path('api/transactions_list', TransactionListView.as_view()),
    path('api/transaction_create', TransactionCreateView.as_view()),
    path('api/transaction_details/<int:pk>', TransactionDetailsView.as_view()),
]
