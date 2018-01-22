# -*- encoding: utf-8 -*-
from django import forms
from .models import Order

class ConnectForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ('name','email', 'phone', 'message',)
        widgets = {
            'name': forms.TextInput(
                attrs={
                    'placeholder': 'ФИО',
                    'pattern': '\D+',
                    'class': 'controller__input',
                    'maxlength': '190'
            }),
            'email': forms.EmailInput(
                attrs={
                    'placeholder': 'E-mail',
                    'class': 'controller__input',
                    'maxlength': '150'

            }),
            'phone': forms.TextInput(
                attrs={
                    'placeholder': 'Номер телефона/Skype',
                    'type': 'text',
                    'class': 'controller__input'
            }),
            'message': forms.Textarea(
                attrs={
                    'placeholder': 'Сообщение',
                    'row': '6',
                    'maxlength': '300',
                    'class': 'controller__input controller__input_textinput'
            })
        }