# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from .forms import ConnectForm
from .models import *
from django.utils import timezone
from django.http import HttpResponse
import threading
# Create your models here.

def index(request):
    form = ConnectForm()
    works = Work.objects.filter(added_date__lte=timezone.now()).order_by('added_date').reverse()
    technologies = Technology.objects.all()
    tools = Tool.objects.all()
    additionaltools = MoreTool.objects.all()
    concepts = Concept.objects.all()

    return render(
        request,
        'index.html',
        {
            'form': form,
            'works': works,
            'technologies': technologies,
            'tools': tools,
            'additionaltools': additionaltools,
            'concepts': concepts
        })

def success(request):
    if request.method == 'POST':
        form = ConnectForm(request.POST)
        if form.is_valid():
            order = form.save(commit=False)
            order.save()
            orderMsg = request.POST['name'] + '\n' + request.POST['email'] + '\n' + request.POST['phone'] + '\n' +  request.POST['message']

            thread = threading.Thread(target=order.sendMail, args=(orderMsg,))
            thread.deamon = True
            thread.start()

            html = '<h3 class="text-center success__title"> Оставайтесь на связи!:)</h3>' + \
                   "<p class='success__text'>Скоро я зайду в свой почтовый ящик и увижу ваше сообщение, после чего буду рад обсудить с вами то, что вас интересует.</p>"

            return HttpResponse(html)
    else:
        form = ConnectForm()
        return HttpResponse({
            'form': form
        })