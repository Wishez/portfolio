# -*- coding: utf-8 -*-
from django.contrib import admin
from singlemodeladmin import SingleModelAdmin
from .models import *

# Template for admin model
# list_per_page = 10
# list_display = ('', '',)
# filter_fields = ('', '', )
# search_fields = ('', '',)
# prepopulated_fields = {'slug': ('',)}
# filter_horizontal = ('', '',)
# fieldsets = (
#     ('Контент страницы', {
#         'fields': (
#             ('', '',),
#             (''),
#             (''),
#             ('',),
#             ('',),
#         ),
#     },),
# )
base_settings_page = ('Базовая настройка страницы', {
                'fields': (
                    ('title',),
                    ('meta',),
                    ('scripts',),
                ),
            },)


@admin.register(HomePage)
class HomePageAdmin(SingleModelAdmin):
    # filter_horizontal = ('sauna',)
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('main_title',),
                ('jumbotron_video', 'is_video',),
                ('jumbotron_image', 'is_image',),
                ('sauna',),
                ('content',),
            ),
        },),
    )

@admin.register(ContactsPage)
class ContactsPageAdmin(SingleModelAdmin):
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('main_title',),
                ('phone_1','phone_2',),
                ('map',),
                ('content',),
            ),
        },),
    )
