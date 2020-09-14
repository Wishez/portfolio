# -*- encoding: utf-8 -*-
from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView
from app.forms import ConnectForm
from app.models import Settings, Work
from .models import *
import math

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
        if self.page_model is not None:
            self.page = get_single_model(self.page_model)

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

    def set_additional_context(self, context):
        works = self.page.works.order_by('-created')
        works = [work for work in works if work in works]
        context['works'] = works
        desktop_part_quantity = int(math.floor(len(works) / 3))
        context['works_desktop_parts'] = {
            "first": works[0:desktop_part_quantity],
            "second": works[desktop_part_quantity:desktop_part_quantity * 2],
            "third": works[desktop_part_quantity * 2:desktop_part_quantity * 3]
        }
        context['about_content'] = get_single_model(AboutPage).content

        return context

class TechnologiesView(BaseView):
    template_name = 'technologies.html'

    def __init__(self):
        super(TechnologiesView, self).__init__()
        self.page_model = TechnologiesPage
    def set_additional_context(self, context):
        context['form'] = ConnectForm()

        return context

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

    def __init__(self):
        super(WorkView, self).__init__()

    def set_additional_context(self, context):
        works = Work.objects.all()
        currentIndex = None
        next = None
        last = None
        quantityWorks = works.count()

        for i in range(len(works)):
            if works[i].id == self.page.id:
                currentIndex = i

        if quantityWorks == 1:
            pass

        elif quantityWorks == 2:
            lastIndex = 0
            if currentIndex == 0:
                lastIndex += 1

            last = works[lastIndex]

        elif currentIndex == 0 and quantityWorks >= 3:
            last = works[quantityWorks - 1]
            next = works[currentIndex + 1]

        else:
            last = works[currentIndex - 1]
            length = len(works) - 1
            if length >= currentIndex + 1:
                next = works[currentIndex + 1]

        context['last'] = last
        context['next'] = next

        return context

    def get(self, request, slug):
        self.page = get_object_or_404(Work, slug=slug)

        return super(WorkView, self).get(request)

class ArticlePageView(BaseView):
    template_name = 'article.html'

    def __init__(self):
        super(ArticlePageView, self).__init__()
        self.page_model = ArticlesPage

    def set_additional_context(self, context):
        context['article_id'] = self.article_id

        return context

    def get(self, request, slug):
        self.article_id = slug

        return super(ArticlePageView, self).get(request)
