# -*- coding: utf-8 -*-
from django.conf.urls import url
from .views import *
from app.views import *

urlpatterns = [
    url('^$', PortfolioView.as_view(), name='portfolio'),
    url('^about/$', AboutPageView.as_view(), name='about'),
    url('^connect/$', ConnectMeView.as_view(), name='connect'),
    url('^tools/$', TechnologiesView.as_view(), name='tools'),
    url('^articles/$', ArticlesPageView.as_view(), name='articles'),
    url('^work/(?P<slug>[a-z_\-0-9]+)/$', WorkView.as_view(), name='work'),
    url('^article/(?P<slug>[\w\-]+)/$', ArticlePageView.as_view(), name='article'),
    url(r'^golden/', golden, name='golden'),
    url(r'^fashionableImages/', fashionableImages, name='fashionableImages'),
    url(r'^slider/', slider, name='slider'),
    url(r'^fashionableImages/registerOrder/', registerOrder, name='registerOrder'),
    url(r'^24cyberMail/', CyberMailPage.as_view(), name='24cyber_mail'),
    url(r'^bets24cyber/', bets, name='bets24cyber'),
    url(r'^gaponov/', GaponovView.as_view(), name='gaponov'),
]