# -*- encoding: utf-8 -*-
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from .forms import ConnectForm
import threading
# Create your views here.
@csrf_exempt
def success(request):

    if request.method == 'POST':
        data = request.POST
        form = ConnectForm(data)

        if form.is_valid():
            order = form.save()

            order.save()
            orderMsg = 'ФИО: %(full_name)s\n Email: %(email)s \n Skype/Телефон: %(phone)s\nСообщение: %(message)s' % data

            thread = threading.Thread(target=order.sendMail, args=(orderMsg,))
            thread.daemon = True
            thread.start()

            html = '<h2>Контакт установлен.</h2>' + \
                   "<p>В ближайшее время, я определённо проверю свою почту и незамедлительно отвечу на ваше сообщение.</p>"

            return HttpResponse(html)
        else:
            form = ConnectForm()
            return HttpResponse({
                'form': form
            })