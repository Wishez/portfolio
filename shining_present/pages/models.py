# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _
from .validators import validate_slug_field
from model_utils.models import TimeStampedModel

class PageManager(models.Manager):
    user_for_related_fields = True

class BasePage(TimeStampedModel):

    page_title = models.CharField(
        _('Заголовок'),
        help_text=_('Название страницы во вкладке'),
        max_length=100
    )
    meta = models.TextField(
        _('META-описание сайта'),
        max_length=300,
        blank=True,
        null=True
    )

    content = models.TextField(
        _('Контент страницы'),
        max_length=16000,
        blank=True,
        null=True,
    )

    scripts =  models.TextField(
        _('Скрипты'),
        help_text=_('Можно вставить код, который будет работать только на текущей странице.'),
        max_length=4085,
        blank=True,
        null=True
    )

    objects = PageManager()
    def __str__(self):
        return self.page_title
    class Meta:
        abstract=True

class PortfolioPage(BasePage):
    works = models.ManyToManyField(
        'app.work', verbose_name='Работы',
        blank=True
    )

    class Meta:
        db_table='portfolio_page'
        verbose_name=_('Страница "Портфолио"')
        verbose_name_plural = _('Страница "Портфолио"')

class AboutPage(BasePage):

    class Meta:
        db_table = 'about_page'
        verbose_name = _('Страница "Обо мне"')
        verbose_name_plural = _('Страница "Обо мне"')

class TechnologiesPage(BasePage):
    class Meta:
        db_table = 'technologies_page'
        verbose_name = _('Страница "Технологии"')
        verbose_name_plural = _('Страница "Технологии"')
class ArticlesPage(BasePage):
    class Meta:
        db_table = 'articles_page'
        verbose_name = _('Страница "Статьи"')
        verbose_name_plural = _('Страница "Статьи"')
class ArticlePage(BasePage):
    class Meta:
        db_table = 'single_article_page'
        verbose_name = _('Статья')
        verbose_name_plural = _('Статьи')