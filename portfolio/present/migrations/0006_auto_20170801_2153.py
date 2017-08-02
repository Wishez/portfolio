# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-01 18:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('present', '0005_auto_20170731_1023'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='work',
            name='additionalTolls',
        ),
        migrations.RemoveField(
            model_name='work',
            name='tolls',
        ),
        migrations.AddField(
            model_name='work',
            name='additionalTools',
            field=models.ManyToManyField(blank=True, null=True, to='present.MoreTool', verbose_name='Другие интсрументы'),
        ),
        migrations.AddField(
            model_name='work',
            name='tools',
            field=models.ManyToManyField(blank=True, null=True, to='present.Tool', verbose_name='Инструменты'),
        ),
        migrations.AlterField(
            model_name='work',
            name='technologies',
            field=models.ManyToManyField(blank=True, null=True, to='present.Technology', verbose_name='Технологии'),
        ),
    ]
