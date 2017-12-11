# -*- encoding: utf-8 -*-
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import  RetrieveAPIView
from ..serializers import *
# Create your views here.

class WorkPreviewView(RetrieveAPIView):
    queryset = Work.objects.all()
    serializer_class = WorkPreviewSerializer
    permission_classes = (IsAuthenticated, )
    lookup_field = 'uuid'

class WorkView(RetrieveAPIView):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = (IsAuthenticated, )
    lookup_field = 'uuid'
# Create your views here.
