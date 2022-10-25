# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from colorfield.fields import ColorField
from pages.models import BasePage
import uuid as uuid_lib
from django.core.mail import EmailMessage
from model_utils.models import TimeStampedModel
import sys

if settings.IS_PRODUCTION and sys.version[0] == '2':
    reload(sys)
    sys.setdefaultencoding('utf-8')

class Settings(TimeStampedModel):
    name = models.CharField(
        _('Имя настройки'),
        max_length=100,
        default=_('Глобальная настройка')
    )
    widgets = models.TextField(
        _('Метрики, виджеты и прочее'),
        max_length=8196,
        blank=True,
        null=True
    )

    email = models.CharField(
        _('Email'),
        max_length=200,
        blank=True,
        null=True
    )

    phone = models.CharField(
        _('Телефон в нижней части страници'),
        max_length=90,
        blank=True,
        null=True,
        default='+7 (985) 905-12-51'
    )
    skype = models.CharField(
        _('Skype'),
        max_length=90,
        blank=True,
        null=True,
        default='fanyxxx1234'
    )

    thumb_photo = models.ForeignKey(
        "album.albumimage",
        verbose_name=_('Твоё лицо'),
        related_name='thumb_photo'
    )

    def __str__(self):
        return 'Глобальная настройка'

    class Meta:
        db_table='site_settings'
        verbose_name = _('Настройка')
        verbose_name_plural = _('Настройки')

class Tag(models.Model):
    name = models.CharField(_('Тэг'), max_length=25)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = _('Тэг')
        verbose_name_plural = _('Тэги')

class Work(BasePage):
    name = models.CharField(_("Имя работы"), max_length=350)
    task = models.TextField(_("Цель проекта"), max_length=650, blank=True, null=True)
    task_en = models.TextField(_("Цель проекта(en)"), max_length=650, blank=True, null=True)
    url = models.URLField(_("Ссылка на работу"), max_length=250, blank=True, null=True)
    uuid = models.UUIDField(
        db_index=True,
        default=uuid_lib.uuid4,
        editable=True
    )
    album = models.ForeignKey(
        "album.album",
        models.CASCADE,
        verbose_name=_("Альбом"),
        related_name=_('work_album')
    )
    slug = models.SlugField(_('Ссылка на сайте'),max_length=50, unique=True)
    tags = models.ManyToManyField(
        Tag,
        verbose_name=_('Теги'),
        related_name='work_tags',
        blank=True
    )

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'my_works'
        verbose_name = 'Работа'
        verbose_name_plural = 'Работы'

class Order(TimeStampedModel):

    full_name = models.CharField(_('ФИО'), max_length=200, default="")
    email = models.EmailField(_('E-mail'), max_length=150)
    phone = models.CharField(_('Skype/Номер телефона'), max_length=50, null=True, blank=True)
    message = models.TextField(_('Сообщение'),  max_length=700)

    def sendMail(self, orderMsg):
        email = EmailMessage(
            'Новый заказ, приятель;3',
            orderMsg,
            settings.DEFAULT_FROM_EMAIL,
            to=['shiningfinger@list.ru']
        )

        email.send()

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = _('Заказ')
        verbose_name_plural = _('Заказы')