# -*- encoding: utf-8 -*-
from django.contrib import admin
from singlemodeladmin import SingleModelAdmin
from .models import *

@admin.register(Settings)
class SettingsAdmin(SingleModelAdmin):
    fieldsets = (
        ('Настройка информации сайта', {
            'fields': (
                ('meta',),
                ('title',),
            ),
        },),
        ('Настройка контактной информации', {
            'fields': (
                ('email',),
                ('skype', 'phone',),
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
    )

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_per_page = 10

@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'is_shown', 'created', 'album',)
    prepopulated_fields = {'slug': ('name',)}
    ordering = ('created',)
    list_per_page = 10
    fieldsets = (
        ('Описание', {
            "fields": (
                ('name', 'url',),
                ('task',),
                ('task_en',),
            )
        }),
        ('Изображения', {
            "fields": (
                ('album',),
                ('thumb')
            )
        }),
        ('Инструментарий', {
            "fields": (
                ('technologies',),
                ('tools',),
                ('additionalTools',),
            )
        }),
        ('Отображение', {
            "fields": (
                ('is_showed','added_date'),
            )
        }),
    )
