# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-12-11 14:17
from __future__ import unicode_literals

from django.db import migrations, models
import imagekit.models.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=70, verbose_name='Заголовок')),
                ('thumb', imagekit.models.fields.ProcessedImageField(default='', upload_to='albums', verbose_name='Превью')),
                ('is_visible', models.BooleanField(default=True, verbose_name='Отображать альбом?')),
                ('slug', models.SlugField(unique=True)),
            ],
            options={
                'verbose_name': 'Альбом',
                'verbose_name_plural': 'Альбомы',
            },
        ),
        migrations.CreateModel(
            name='AlbumImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('image', imagekit.models.fields.ProcessedImageField(upload_to='albums', verbose_name='Изображение')),
                ('description', models.TextField(blank=True, max_length=1024, null=True, verbose_name='Описание')),
                ('alt', models.CharField(default=uuid.uuid4, max_length=255, verbose_name='Альтернативный текст изображения')),
                ('width', models.IntegerField(default=0, help_text='По умолчанию - адаптивно', verbose_name='Ширина')),
                ('height', models.IntegerField(default=0, help_text='По умолчанию - адаптивно', verbose_name='Высонта')),
                ('slug', models.SlugField(default=uuid.uuid4, editable=False, max_length=70)),
            ],
            options={
                'verbose_name': 'Изображение',
                'verbose_name_plural': 'Изображения',
            },
        ),
        migrations.AddField(
            model_name='album',
            name='album_images',
            field=models.ManyToManyField(related_name='album_images', to='album.AlbumImage', verbose_name='Изображения альбома'),
        ),
    ]