from rest_framework import serializers
from .models import UserAccount

class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= UserAccount
        fields = fields = ["username","email","password","gender","birth_date","phone_number"]

    