# -*- coding: utf-8 -*-
from django.conf.urls import url
from .views import *
urlpatterns = [
    url('^$', PortfolioView.as_view(), name='portfolio'),
    url('^about/$', AboutPageView.as_view(), name='about'),
    url('^connect/$', TechnologiesView.as_view(), name='connect'),
    url('^articles/$', ArticlesPageView.as_view(), name='articles'),
    url('^work/(?P<slug>[a-z_\-0-9]+)/$', WorkView.as_view(), name='work'),
    url('^article/(?P<slug>[a-z_\-0-9]+)/$', ArticlePageView.as_view(), name='article'),
]