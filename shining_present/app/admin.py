# -*- encoding: utf-8 -*-
from django.contrib import admin
from singlemodeladmin import SingleModelAdmin
from .models import *

@admin.register(Settings)
class SettingsAdmin(SingleModelAdmin):
    fieldsets = (
        ('Настройка информации сайта', {
            'fields': (
                ('widgets',),
                ('meta',)
            ),
        },),
        ('Настройка контактной информации', {
            'fields': (
                ('email', 'footer_phone',),
                ('city', 'address',),
                ('addressHref',),
            ),
        },),
        ('Ссылки', {
            'fields': (
                ('default_link_color', 'default_link_hover_color',),
            ),
        },),
        ('Загрузка', {
            'fields': (
                ('preloader_color', 'curtain_bg',),
            ),
        },),
        ('Фон сайта', {
            'fields': (
                ('default_bg', 'default_image_bg',),
            ),
        },),
        ('Шрифт', {
            'fields': (
                ('default_color',),
            ),
        },),
        ('Нижняя часть страницы', {
            'fields': (
                ('footer_photo',),
                ('footer_copyright',)
            ),
        },),
    )
