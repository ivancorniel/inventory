from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver

from django.db.models.signals import post_save

class Product(models.Model):
    title = models.CharField(max_length=32)
    notes = models.TextField()
    picture = models.ImageField(upload_to='product_images', null=True, blank=True)
    amount = models.IntegerField(default=0)

    @receiver(post_save, sender='product.Transaction')
    def update_amount(sender, **kwargs):
        product = Product.objects.get(title=kwargs['instance'].product)
        if kwargs['instance'].transaction_type == 'IN':
            product.amount += kwargs['instance'].amount
            product.save()
        else:
            if product.amount - kwargs['instance'].amount > 0:
                product.amount = product.amount - kwargs['instance'].amount
                product.save()

    def __str__(self):
        return self.title


TYPE = [
    ('IN', 'In'),
    ('OUT', 'Out'),
]

class Transaction(models.Model):
    transaction_date = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    transaction_type = models.TextField(choices=TYPE, default='OUT')
    amount = models.IntegerField()
    notes = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return str(self.product) + ' | ' + str(self.transaction_date) + ' | ' + self.transaction_type + ' | ' + str(self.amount)
