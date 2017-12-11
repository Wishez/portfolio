from django.test import TestCase
from django.urls import reverse
from words.models import User
import json
class WordsApi(TestCase):
    def setUp(self):
        pass