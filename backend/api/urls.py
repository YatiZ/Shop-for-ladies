from django.urls import path
from . import views

urlpatterns = [
    path('',views.getReviews, name='reviews'),
    path('register/',views.registration, name='register'),
    path('accounts/',views.userData,name='users'),
    path('promo_code/',views.promo_code_validation,name='promo_code')
]