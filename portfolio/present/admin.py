# -*- encoding: utf-8 -*-
from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Order)
admin.site.register(Work)
admin.site.register(Technology)
admin.site.register(Concept)
admin.site.register(Tool)
admin.site.register(MoreTool)
