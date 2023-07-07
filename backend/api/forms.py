
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import UserAccount
from phonenumber_field.modelfields import PhoneNumberField
Gender = (
    ('Female','Female'),
    ('Male','Male'),
    ('Other','Other')
)
YEARS = [x for x in range(1930,2022)]
class UserRegisterForm(UserCreationForm):
    password1 = forms.CharField(widget=forms.PasswordInput())
    password2 = forms.CharField(widget=forms.PasswordInput())
    gender = forms.ChoiceField(choices=Gender, widget=forms.RadioSelect())
    phone_number = PhoneNumberField()
    birth_date = forms.DateField(label="Your Birthday Date",widget=forms.SelectDateWidget(years=YEARS,attrs={'style':'font-size: 20px;'}))
    class Meta:
        model = UserAccount
        fields = ["username","email","password1","password2","gender","birth_date","phone_number"]

    def clean(self):
        clean_data = super(UserRegisterForm,self).clean()
        password1 = clean_data.get("password1")
        password2 = clean_data.get("password2")

        if password1 != password2:
            raise forms.ValidationError("password and confirm_password does not match")