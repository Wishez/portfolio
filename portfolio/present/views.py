# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import ConnectForm
from .models import Work
from django.utils import timezone
from django.core.mail import send_mail
import json
from django.utils.encoding import python_2_unicode_compatible
# Create your models here.

def index(request):
    if request.method == 'POST':
        form = ConnectForm(request.POST)
        if form.is_valid():
            order = form.save(commit=False)
            order.save()
            orderMsg = request.POST['name'] + '\n' + request.POST['email'] +  '\n' + request.POST['phone'] + '\n' +  request.POST['message']

            # orderMsg = 'Привет, я твой потенциальный заказчик, зовут меня - ' + request.POST['name'] + ".\n"
            # orderMsg += 'Я хочу тебе сказать: ' + request.POST['message'] + ".\n"
            # orderMsg += 'Здесь либо есть телфон, по которому ты можешь позвонить мне, либо нет: ' + request.POST[
            #     'phone'] + ".\n"
            # orderMsg += " Ты всегда сможешь написать мне на email: " + request.POST[
            #     'email'] + '\n.' + ' С уважением, твой заказчик:З.'
            # send_mail('Хочешь поработать?.', orderMsg, 'shiningfinger@list.ru', ['shiningfinger@list.ru'])

            send_mail('Хочешь поработать?.', orderMsg, 'shiningfinger@list.ru', ['shiningfinger@list.ru'])
            return redirect('/success/')
    else:
        form = ConnectForm()
    works = Work.objects.filter(added_date__lte=timezone.now()).order_by('added_date').reverse()
    return render(
        request,
        'index-ru.html',
        {
            'form': form,
            'works': works
        })

def success(request):
    return render(request, 'success.html', {})