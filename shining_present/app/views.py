# -*- encoding: utf-8 -*-
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .forms import ConnectForm
from django.views.generic import TemplateView
import threading
import json

# Create your views here.
@csrf_exempt
def success(request):

    if request.method == 'POST':
        data = json.loads(request.body)
        print(type(data))
        form = ConnectForm(data)
        print(form.is_valid())
        if form.is_valid():
            order = form.save()

            order.save()
            orderMsg = 'ФИО: %(full_name)s\n Email: %(email)s \n Skype/Телефон: %(phone)s\nСообщение: %(message)s' % data

            # thread = threading.Thread(target=order.sendMail, args=(orderMsg,))
            # thread.daemon = True
            # thread.start()

            html = '<h2>Контакт установлен.</h2>' + \
                   "<p>В ближайшее время, я определённо проверю свою почту и незамедлительно отвечу на ваше сообщение.</p>"

            return HttpResponse(html)
        else:
            form = ConnectForm()
            return HttpResponse('', status=400)

class GaponovView(TemplateView):
    template_name = 'gaponov.html'

class CyberMailPage(TemplateView):
    template_name = '24cyberMail.html'

@csrf_exempt
def fashionableImages(request):
    return render(
        request,
        'fashionableImages.html',
        {}
    )

def registerOrder(request):
    if request.method == 'POST':
        return HttpResponse("We got it!")

def golden(request):
    return render(
        request,
        'golden_page.html',
        {}
    )

def bets(request):
    return render(
        request,
        'bets24cyber.html',
        {}
    )

def slider(request):
    return render(
        request,
        'slider.html',
        {}
    )
