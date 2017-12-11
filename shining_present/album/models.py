# -*- coding: utf-8 -*-
import uuid
from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
from django.utils.translation import ugettext_lazy as _
from app.models import TimeStampedModel

def album_directory(instance, filename):
    return 'albums/{0}/{1}'.format(instance.id, filename)

class Album(TimeStampedModel):
    title = models.CharField(_('Заголовок'), max_length=70)
    thumb = ProcessedImageField(verbose_name=_('Превью'), upload_to='albums', processors=[ResizeToFit(300)], format='JPEG', options={'quality': 90}, default='')
    #tags = models.CharField(max_length=250)
    is_visible = models.BooleanField(_('Отображать альбом?'), default=True)
    slug = models.SlugField(max_length=50, unique=True)
    album_images = models.ManyToManyField(
        "albumimage",
        verbose_name=_('Изображения альбома'),
        related_name='album_images'
    )
    #def get_absolute_url(self):
    #    return reverse('album', kwargs={'slug':self.slug})
    def __str__(self):
        return self.title
    def __unicode__(self):
        return self.title
    class Meta:
        verbose_name = _('Альбом')
        verbose_name_plural = _('Альбомы')

class AlbumImage(TimeStampedModel):
    image = ProcessedImageField(verbose_name=_('Изображение'), upload_to='albums', processors=[ResizeToFit(300)], format='JPEG', options={'quality': 70})
    description = models.TextField(_('Описание'), max_length=1024, blank=True, null=True )
    alt = models.CharField(_('Альтернативный текст изображения'), max_length=255, default=uuid.uuid4)
    width = models.IntegerField(_('Ширина'), default=0, help_text=_('По умолчанию - адаптивно'))
    height = models.IntegerField(_('Высонта'), default=0, help_text=_('По умолчанию - адаптивно'))
    slug = models.SlugField(max_length=70, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.alt
    class Meta:
        verbose_name = _('Изображение')
        verbose_name_plural = _('Изображения')

        #