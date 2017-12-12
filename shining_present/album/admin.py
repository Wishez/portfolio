# -*- coding: utf-8 -*-
import uuid
import zipfile
import shining_present.settings
from datetime import datetime
from zipfile import ZipFile

from django.contrib import admin
from django.core.files.base import ContentFile

from PIL import Image

from album.models import Album, AlbumImage
from album.forms import AlbumForm


@admin.register(Album)
class AlbumModelAdmin(admin.ModelAdmin):
    form = AlbumForm
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title', )
    list_filter = ('created',)

    def save_model(self, request, obj, form, change):
        if form.is_valid():
            album = form.save(commit=False)
            album.save()

            if form.cleaned_data['zip'] != None:
                zip = zipfile.ZipFile(form.cleaned_data['zip'])
                for filename in sorted(zip.namelist()):
                    data = zip.read(filename)
                    contentfile = ContentFile(data)

                    img = AlbumImage()
                    # img.album = album
                    img.alt = filename
                    filename = '{0}{1}.jpg'.format(album.slug, str(uuid.uuid4())[-13:])
                    img.image.save(filename, contentfile)

                    filepath = '{0}/albums/{1}'.format(shining_present.settings.MEDIA_ROOT, filename)
                    with Image.open(filepath) as i:
                        img.width, img.height = i.size
                    img.save()

                    album.album_images.add(img)
                    #img.thumb.save('thumb-{0}'.format(filename), contentfile)
                album.save()
                zip.close()
            super(AlbumModelAdmin, self).save_model(request, obj, form, change)

# In case image should be removed from album.
@admin.register(AlbumImage)
class AlbumImageModelAdmin(admin.ModelAdmin):
    list_display = ('alt',)
    list_filter = ('created',)