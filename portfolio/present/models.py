# -*- encoding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible
# Create your models here.

@python_2_unicode_compatible
class Order(models.Model):

    name = models.CharField(max_length=36, verbose_name='Имя')
    email = models.EmailField(max_length=100, verbose_name='E-mail')
    phone = models.CharField(max_length=24, verbose_name='Номер телефона', null=True, blank=True)
    message = models.TextField(verbose_name='Сообщения')
    ordered_date = models.DateTimeField(default=timezone.now)

    def connect(self):
        self.save()

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Work(models.Model):

    url = models.URLField(max_length=250, verbose_name="Ссылка на работу")
    desc = models.CharField(max_length=350, verbose_name="Описание работы")
    img = models.ImageField(upload_to="works/", verbose_name="Изображение работы")
    added_date = models.DateTimeField(default=timezone.now)

    def present(self):
        self.added_date = timezone.now()
        self.save()

    def __str__(self):
        return self.desc


