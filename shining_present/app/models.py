# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from colorfield.fields import ColorField
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
import uuid as uuid_lib
from django.core.mail import EmailMessage

if settings.IS_PRODUCTION:
    encoding = 'utf-8'
    import sys
    reload(sys)
    sys.setdefaultencoding(encoding)



class TimeStampedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True


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

class Work(TimeStampedModel):
    name = models.CharField(_("Имя работы"), max_length=350)
    task = models.TextField(_("Цель проекта"), max_length=350)
    task_en = models.TextField(_("Цель проекта(en)"), max_length=350, blank=True)
    url = models.URLField(_("Ссылка на работу"), max_length=250)
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
    slug = models.SlugField(max_length=50, unique=True)
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

    name = models.CharField(_('Имя'), max_length=36)
    email = models.EmailField(_('E-mail'), max_length=100)
    phone = models.CharField(_('Номер телефона'), max_length=24, null=True, blank=True)
    message = models.TextField(_('Сообщение'))

    def sendMail(self, orderMsg):
        email = EmailMessage(
            'Новый заказ, приятель;3',
            orderMsg,
            settings.DEFAULT_FROM_EMAIL,
            to=['shiningfinger@list.ru']
        )
        email.send()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('Заказ')
        verbose_name_plural = _('Заказы')