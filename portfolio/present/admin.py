# -*- encoding: utf-8 -*-
from django.contrib import admin
from .models import *

# Register your models here.

class AdminWork(admin.ModelAdmin):
    filter_horizontal = ('tools', 'technologies', 'additionalTools')
    list_display = ('url', 'name', 'is_showed', 'added_date',)
    ordering = ('-added_date',)

    fieldsets = (
        ('Описание', {
            "fields": (
                ('name', 'url',),
                ('desc', 'full_desc'),
            )
        }),
        ('Представление', {
            "fields": (
                ('img',),
                ('slide_1', 'slide_2', 'slide_3',),
                ('slide_4', 'slide_5', 'slide_6',),
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

admin.site.register(Order)
admin.site.register(Work, AdminWork)
admin.site.register(Technology)
admin.site.register(Concept)
admin.site.register(Tool)
admin.site.register(MoreTool)
