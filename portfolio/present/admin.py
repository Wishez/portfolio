# -*- encoding: utf-8 -*-
from django.contrib import admin
from .models import Order, Work

# Register your models here.

admin.site.register(Order)
admin.site.register(Work)