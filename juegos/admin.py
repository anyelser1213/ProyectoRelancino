from django.contrib import admin

from juegos.models import Jugada, TipoJugadas

# Register your models here.



admin.site.register(TipoJugadas)
admin.site.register(Jugada)
