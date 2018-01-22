# -*- encoding: utf-8 -*-
from django.contrib import admin
from singlemodeladmin import SingleModelAdmin
from .models import *

@admin.register(Settings)
class SettingsAdmin(SingleModelAdmin):
    fieldsets = (
        ('Настройка контактной информации', {
            'fields': (
                ('email',),
                ('skype', 'phone',),
                ('thumb_photo',),
            ),
        },),
    )

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_per_page = 10

@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'created', 'album',)
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
            )
        }),
        ('Дополнения', {
            "fields": (
                ('tags',),
            )
        }),
    )
