from django.apps import AppConfig
from django.db.models.signals import pre_delete

class JuegosConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'aplicaciones.juegos'


    def ready(self):
        from django.contrib.auth.models import User
        from aplicaciones.juegos.models import TipoJugadas
        from .funciones_receptoras import BorrarTipo_Jugada

        pre_delete.connect(BorrarTipo_Jugada, sender=TipoJugadas)
