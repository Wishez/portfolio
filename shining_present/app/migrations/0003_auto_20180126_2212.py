# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-01-26 19:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20180126_2209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='email',
            field=models.EmailField(max_length=150, verbose_name='E-mail'),
        ),
        migrations.AlterField(
            model_name='order',
            name='message',
            field=models.TextField(max_length=700, verbose_name='Сообщение'),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Skype/Номер телефона'),
        ),
    ]
