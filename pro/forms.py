from django import forms
from matplotlib import widgets
from .models import *
from django.forms import ModelForm, fields, widgets 

class dpForm(ModelForm):
    class Meta:
        model = dpDetails
        fields = ("dpimg","name",)
        labels = {
            'dpimg' : '',
            'name' : '',
        }
        
    