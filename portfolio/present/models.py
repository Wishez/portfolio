# -*- encoding: utf-8 -*-
#import sys
#encoding = 'utf-8'
#reload(sys)
#sys.setdefaultencoding(encoding)
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from django.core.mail import send_mail
# Create your models here.

class Order(models.Model):

    name = models.CharField(_('Имя'), max_length=36)
    email = models.EmailField(_('E-mail'), max_length=100)
    phone = models.CharField(_('Номер телефона'), max_length=24, null=True, blank=True)
    message = models.TextField(_('Сообщение'))
    ordered_date = models.DateTimeField(default=timezone.now)

    def sendMail(self, orderMsg):
        send_mail('Хочешь поработать?.', orderMsg, 'comandos.testing@list.ru', ['shiningfinger@list.ru'])

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Заказ')
        verbose_name_plural = _('Заказы')


class Technology(models.Model):
    icon = models.ImageField(_('Иконка'), upload_to='icons/')
    name = models.CharField(_("Имя технологии"), max_length=350)
    tooltip = models.TextField(_('Подсказка'), max_length=700)
    link = models.URLField(_('Ссылка'), max_length=400)
    progress = models.IntegerField(_('Прогресс от 1 до 100%'))

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Технология'
        verbose_name_plural = 'Технологии'

class Tool(models.Model):
    icon = models.ImageField(_('Иконка'), upload_to='icons/')
    name = models.CharField(_("Имя инструмента"), max_length=350)
    tooltip = models.TextField(_('Подсказка'), max_length=700)
    link = models.URLField(_('Ссылка'), max_length=400)
    progress = models.IntegerField(_('Прогресс от 1 до 100%'))

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Инструмент'
        verbose_name_plural = 'Инструменты'

class Concept(models.Model):
    name = models.CharField(_("Имя концепции"), max_length=350)
    tooltip = models.TextField(_('Подсказка'), max_length=700)
    link = models.URLField(_('Ссылка'), max_length=400)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Концепция'
        verbose_name_plural = 'Концепции'

class MoreTool(models.Model):
    name = models.CharField(_("Имя инструмента"), max_length=350)
    tooltip = models.TextField(_('Подсказка'), max_length=700)
    link = models.URLField(_('Ссылка'), max_length=400)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Дополнительный инструмент'
        verbose_name_plural = 'Дополнительный инструменты'

def work_direcroty(instance, filename):
    return 'works/work_{0}/{1}'.format(instance.id, filename)
class Work(models.Model):

    url = models.URLField(_("Ссылка на работу"), max_length=250)
    desc = models.CharField(_("Описание внутри тега alt"), max_length=350)
    full_desc = models.TextField(
        _("Описание проекта"),
        max_length=4096,
        null=True,
        blank=True
    )
    img = models.ImageField(_("Изображение работы"), upload_to=work_direcroty)

    slide_1 = models.ImageField(
        _("Изображение работы 1"),
        upload_to=work_direcroty,
        null=True,
        blank=True
    )
    slide_2 = models.ImageField(
        _("Изображение работы 2"),
        upload_to=work_direcroty,
        null=True,
        blank=True
    )
    slide_3 = models.ImageField(
        _("Изображение работы 3"),
        upload_to=work_direcroty,
        null=True,
        blank=True
    )
    slide_4 = models.ImageField(
        _("Изображение работы 4"),
        upload_to=work_direcroty,
        null=True,
        blank=True
    )
    slide_5 = models.ImageField(
        _("Изображение работы 5"),
        upload_to=work_direcroty,
        null=True,
        blank=True
    )
    slide_6 = models.ImageField(
        _("Изображение работы 6"),
        upload_to=work_direcroty,
        null=True,
        blank=True
    )
    technologies = models.ManyToManyField(
        Technology,
        verbose_name=_('Технологии'),
        null=True,
        blank=True
    )
    tolls = models.ManyToManyField(
        Tool,
        verbose_name=_('Инструменты'),
        null = True,
        blank = True
    )
    additionalTolls = models.ManyToManyField(
        MoreTool,
        verbose_name=_('Другие интсрументы'),
        null=True,
        blank=True
    )
    added_date = models.DateTimeField(_("Дата выполнения"), default=timezone.now)

    def present(self):
        self.added_date = timezone.now()
        self.save()

    def __str__(self):
        return self.desc

    class Meta:
        verbose_name = 'Работа'
        verbose_name_plural = 'Работы'
