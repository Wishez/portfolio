# -*- coding: utf-8 -*-
from django.conf.urls import url
from .views import *
urlpatterns = [
    url('^$', PortfolioView.as_view(), name='portfolio'),
    # url('^about/$', AboutView.as_view(), name='about'),
    # url('^connect/$', ConnectView.as_view(), name='connect'),
    # url('^articles/$', ArticleView.as_view(), name='contacts'),
    # url('^work/(?P<slug>[a-z_\-0-9]+)/$', WorkView.as_view(), name='work'),
    # url('^article/(?P<slug>[a-z_\-0-9]+)/$', ArticleView.as_view(), name='article'),
]