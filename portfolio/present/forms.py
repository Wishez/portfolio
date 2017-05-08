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
                    'placeholder': 'Имя',
                    'pattern': '\D+',
                    'class': 'elemForm__item',
                    'maxlength': '24'
            }),
            'email': forms.EmailInput(
                attrs={
                    'placeholder': 'E-mail',
                    'class': 'elemForm__item',
                    'maxlength': '90'
            }),
            'phone': forms.TextInput(
                attrs={
                    'placeholder': 'Номер телефона',
                    'type': 'tel',
                    'class': 'elemForm__item'
            }),
            'message': forms.Textarea(
                attrs={
                    'placeholder': 'Сообщение',
                    'row': '6',
                    'maxlength': '300',
                    'class': 'elemForm__item'
            })
        }