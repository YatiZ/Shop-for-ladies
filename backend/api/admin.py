from django.contrib import admin
from .models import UserAccount, PromoCode,UserMessage

admin.site.register(UserAccount)
admin.site.register(PromoCode)
admin.site.register(UserMessage)