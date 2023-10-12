
from django.http import HttpResponse
from django.http import Http404
from django.contrib.auth.models import User
from .models import UserAccount,PromoCode,UserMessage
from .serializers import RegisterSerializer,UserMessageSerializer, LoginUserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.utils import timezone
from django.contrib.auth import authenticate, login

def getReviews(request):
    return HttpResponse("hello");

@api_view(['POST'])
def registration(request):
    serializer = RegisterSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status= status.HTTP_201_CREATED)
    
    return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def login(request):
#     serializer = LoginUserSerializer(data = request.data)
#     if serializer.is_valid():
#         username = serializer.validated_data['username']
#         password = serializer.validated_data['password']
#         user = authenticate(username = username, password = password)
     
#         if user is not None:
#             # login(request, user)
#             return Response({'message':'Login successful'}, status=status.HTTP_200_OK)
#         else:
#             return Response("Login Failed. Please check your credentials.", status=status.HTTP_401_UNAUTHORIZED)
#     return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    try:
        user_account = UserAccount.objects.get(username=username, password=password)
        if user_account is not None:
            
            return Response({'message':'Login Successful'})
        return Response("Login Failed")
    except user_account.DoesNotExist:
        return Response({'message':'Invalid account'})

# @api_view(['POST'])
# def login(request):
#     username = request.data.get('username')
#     password = request.data.get('password')

#     user = authenticate(request, username=username, password=password)

#     if user is not None:
#         login(request, user)
#         return Response({'message': 'Login Successful'})
#     else:
#         return Response({'message': 'Login Failed'}, status=status.HTTP_401_UNAUTHORIZED)


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

@api_view(['POST'])
def user_messages(request):
    serializer = UserMessageSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status= status.HTTP_400_BAD_REQUEST)
