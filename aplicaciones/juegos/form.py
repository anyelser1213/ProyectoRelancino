from django import forms
from django.contrib import admin
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.core.exceptions import ValidationError
from django.db.models import fields
from django.forms import ClearableFileInput, ModelForm, widgets
from .models import *



class JugadaForm(forms.Form):
    digitos = forms.CharField(
                     help_text = "Ingresa Numeros"
                     )
    #texto = forms.CharField(max_length=500)

    def __init__(self, *args, **kwargs):
        super(JugadaForm, self).__init__(*args, **kwargs)
        print("entramos en formulario JugadaForm")
        self.fields['digitos'].widget.attrs.update({
            'class': 'form-control','placeholder':'Ingrese Digitos','value':'0','maxlength':0,'pattern':'[0-9]+','onkeypress':'return valideKey(event);' })
    #description = forms.CharField()


"""
class PlacaForm(ModelForm):

    def __init__(self, *args, **kwargs):
        super(PlacaForm, self).__init__(*args, **kwargs)
        print("entramos en formulario PlanForm")
        self.fields['id_placa'].widget.attrs.update({
            'class': 'form-control' })
    class Meta:

        model = Placa
        fields = "__all__"

"""



    