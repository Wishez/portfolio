# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from colorfield.fields import ColorField
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
import uuid as uuid_lib

if not settings.DEBUG:
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
    meta = models.TextField(
        _('Глобальное META-описание сайта'),
        max_length=300,
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

    default_link_color = ColorField(_('Стандартный цвет ссылок'), blank=True,
                                    null=True)
    default_link_hover_color = ColorField(_('Стандартный цвет ссылок при наведении'), blank=True,
                                          null=True)

    default_color = ColorField(_('Цвет шрифта по умолчанию'), blank=True,
                               null=True)
    default_bg = ColorField(_('Цвет фона сайта'), blank=True,
                            null=True)

    thumb_photo = models.ForeignKey(
        "album.albumimage",
        verbose_name=_('Твоё лицо'),
        related_name='thumb_photo'
    )

    preloader_color = ColorField(_('Цвет прелоадера'), blank=True,
                                 null=True)
    curtain_bg = ColorField(_('Цвет фона предварительной загрузки'), blank=True,
                            null=True)

    def __str__(self):
        return self.name

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

    is_shown = models.BooleanField(_('Отобразить?'), default=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'my_works'
        verbose_name = 'Работа'
        verbose_name_plural = 'Работы'
