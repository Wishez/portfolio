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
base_settings_page = \
    ('Базовая настройка страницы', {
        'fields': (
            ('page_title',),
            ('meta',),
            ('scripts',),
        ),
    },)

@admin.register(PortfolioPage)
class PortfolioPageAdmin(SingleModelAdmin):
    per_page = 10
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('works',),
                ('content',),
                ('scripts',),
            ),
        },),
    )

@admin.register(ArticlePage)
class ArticlePageAdmin(SingleModelAdmin):
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('content',),
                ('scripts',),
            ),
        },),
    )

@admin.register(ArticlesPage)
class ArticlesPageAdmin(SingleModelAdmin):
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('content',),
                ('scripts',),
            ),
        },),
    )

@admin.register(TechnologiesPage)
class TechnologiesPageAdmin(SingleModelAdmin):
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('content',),
                ('scripts',),
            ),
        },),
    )

@admin.register(AboutPage)
class AboutPageAdmin(SingleModelAdmin):
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('content',),
                ('scripts',),
            ),
        },),
    )

@admin.register(ConnectMePage)
class ConnectMePageAdmin(SingleModelAdmin):
    fieldsets = (
        base_settings_page,
        ('Контент страницы', {
            'fields': (
                ('content',),
                ('scripts',),
            ),
        },),
    )

