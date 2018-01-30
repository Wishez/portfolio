# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-01-28 18:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20180126_2212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='work',
            name='slug',
            field=models.SlugField(unique=True, verbose_name='Ссылка на сайте'),
        ),
        migrations.AlterField(
            model_name='work',
            name='task',
            field=models.TextField(blank=True, max_length=650, null=True, verbose_name='Цель проекта'),
        ),
        migrations.AlterField(
            model_name='work',
            name='task_en',
            field=models.TextField(blank=True, max_length=650, null=True, verbose_name='Цель проекта(en)'),
        ),
        migrations.AlterField(
            model_name='work',
            name='url',
            field=models.URLField(blank=True, max_length=250, null=True, verbose_name='Ссылка на работу'),
        ),
    ]
