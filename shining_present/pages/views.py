# -*- encoding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView

from app.models import Settings, Work
from .models import *
# Create your views here.

def get_single_model(Model):
    return Model.objects.get()

class BaseView(TemplateView):
    def __init__(self):
        self.page_model = None
        self.page = None
        self.settings = get_single_model(Settings)
        self.meta = ''
    # Дополняет контекст свойствами нужной страницы, если нужно
    def set_additional_context(self, context):

        return context
    def get_page(self):
        self.page = self.page_model.objects.get()

    def get_context_data(self, **kwargs):
        context = super(BaseView, self).get_context_data(**kwargs)
        if self.page is None:
            self.get_page()

        page = self.page
        #
        # # Установка мета-описания для текущей страницы
        if page.meta != '':
            self.meta = page.meta

        context['meta'] = self.meta
        context['page'] = page
        context['settings'] = self.settings

        return self.set_additional_context(context)

class PortfolioView(BaseView):
    template_name = 'portfolio.html'

    def __init__(self):
        super(PortfolioView, self).__init__()
        self.page_model = PortfolioPage


class TechnologiesView(BaseView):
    template_name = 'technologies.html'

    def __init__(self):
        super(TechnologiesView, self).__init__()
        self.page_model = TechnologiesPage
class AboutPageView(BaseView):
    template_name = 'about.html'

    def __init__(self):
        super(AboutPageView, self).__init__()
        self.page_model = AboutPage
class ArticlesPageView(BaseView):
    template_name = 'articles.html'

    def __init__(self):
        super(ArticlesPageView, self).__init__()
        self.page_model = ArticlesPage


class WorkView(BaseView):
    template_name = 'work.html'

    def get(self, request, slug):
        self.page = get_object_or_404(Work, slug=slug)

        return super(Work, self).get(request)

class ArticlePageView(BaseView):
    template_name = 'article.html'
    page_model = ArticlesPage
    def __init__(self):
        super(ArticlePageView, self).__init__()
        self.page_model = ArticlePage
    def set_additional_context(self, context):
        context['article_id'] = self.article_id

        return context
    def get(self, request, id):
        self.article_id = id

        return super(ArticlePageView, self).get(request)
