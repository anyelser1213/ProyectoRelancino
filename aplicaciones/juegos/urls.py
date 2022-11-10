from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name ="juegos"

urlpatterns = [
    #path('', views.Index.as_view(), name='index'),
    
    path('iniciarJugada', views.IniciarJugada.as_view() ,name="iniciarJugada"),

    path('consultarJuegos', views.ConsultarJugada.as_view() ,name="consultarJugada"),



    
    
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)