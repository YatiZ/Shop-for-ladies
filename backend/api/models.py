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
    