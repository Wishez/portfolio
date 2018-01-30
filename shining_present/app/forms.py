# -*- encoding: utf-8 -*-
from django import forms
from .models import Order

class ConnectForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ('full_name','email', 'phone', 'message',)
        widgets = {
            'full_name': forms.TextInput(
                attrs={
                    'placeholder': 'Иванов Иван Иванович',
                    'pattern': '\D+',
                    'class': 'controller__input',
                    'minlength': '3'
            }),
            'email': forms.EmailInput(
                attrs={
                    'placeholder': 'shiningfinger@list.ru',
                    'class': 'controller__input',

            }),
            'phone': forms.TextInput(
                attrs={
                    'placeholder': '+7 (985) 905-12-51',
                    'type': 'text',
                    'class': 'controller__input',
                    'minlength': '3'
            }),
            'message': forms.Textarea(
                attrs={
                    'placeholder': 'Кратко опишите, что вас интересует. Минимальная длина 50 символов.',
                    'row': '6',
                    'class': 'controller__input controller__input_textinput',
                    'minlength': '50'
            })
        }