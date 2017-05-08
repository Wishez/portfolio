# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import ConnectForm
from .models import Work
from django.utils import timezone
from django.core.mail import send_mail
from django.http import HttpResponse
# Create your models here.

def index(request):
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
    if request.method == 'POST':
        form = ConnectForm(request.POST)
        if form.is_valid():
            order = form.save(commit=False)
            order.save()
            orderMsg = request.POST['name'] + '\n' + request.POST['email'] + '\n' + request.POST['phone'] + '\n' +  request.POST['message']

            send_mail('Хочешь поработать?.', orderMsg, 'comandos.testing@list.ru', ['shiningfinger@list.ru'])
            html = '<h3 class="text-center success__title"> Оставайтесь на связи!:)</h3>' + \
                   "<p class='success__text'>Скоро я зайду в свой почтовый ящик и увижу ваше сообщение, после чего буду рад обсудить с вами то, что вас интересует.</p>"

            return HttpResponse(html)
    else:
        form = ConnectForm()
        return HttpResponse({
            'form': form
        })