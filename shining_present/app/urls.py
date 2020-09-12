# -*- encoding: utf-8 -*-
from django.conf.urls import url
from .api.views.work import *
from .views import *

urlpatterns = [
    url(
        r'^api/v1/works_list/$',
        WorkPreviewView.as_view(),
        name='plugin_user'
    ),
    url(
        r'^api/v1/works/(?P<uuid>[-\w]+)/$',
        WorkView.as_view(),
        name='document_data_user'
    ),
    url(r'^connectMe/', success, name='connectMe'),
]