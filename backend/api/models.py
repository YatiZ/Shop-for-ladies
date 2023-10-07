from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractUser

Gender = (
    ('Female','Female'),
    ('Male','Male'),
    ('Other','Other')
)
class UserAccount(AbstractUser):
    user_id = models.BigAutoField(primary_key=True)
    phone_number = PhoneNumberField(null=True,blank=True)
    birth_date = models.DateField(null=True, blank=True, default=None)
    gender = models.CharField(max_length=10,choices= Gender)
    
class PromoCode(models.Model):
    code = models.CharField(max_length=5, unique=True)
    discount_amount = models.DecimalField(max_digits=10, decimal_places=2)
    expiration_date = models.DateField()

class UserMessage(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    messages = models.TextField()
