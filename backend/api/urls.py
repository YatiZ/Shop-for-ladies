from django.urls import path
from . import views

urlpatterns = [
    path('',views.getReviews, name='reviews'),
    path('register/',views.registration, name='register'),
    path('accounts/',views.userData,name='users')
]