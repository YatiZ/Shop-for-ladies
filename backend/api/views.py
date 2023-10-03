
from django.http import HttpResponse
from django.http import Http404
from django.contrib.auth.models import User
from .models import UserAccount,PromoCode
from .serializers import RegisterSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.utils import timezone

def getReviews(request):
    return HttpResponse("hello");

@api_view(['POST'])
def registration(request):
    serializer = RegisterSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status= status.HTTP_201_CREATED)
    
    return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def userData(request):
    
    users = UserAccount.objects.all()
    serializer = RegisterSerializer(users, many=True)
    return Response(serializer.data)

#API for Promocode with validation expiration dates
@api_view(['POST'])
def promo_code_validation(request):
    code = request.data.get('code')
    try:
        promo_code = PromoCode.objects.get(code=code)
        if promo_code.expiration_date >= timezone.now().date():
            return Response({
                'valid':True,
                'discount_amount': promo_code.discount_amount
            })
        else:
            return Response({'valid':False, 'message':'Expired promo code'})
    except PromoCode.DoesNotExist:
        return Response({'valid':False,'message':'Invalid promo code'})


