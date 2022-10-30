from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name ="informes"

urlpatterns = [
    #path('', views.Index.as_view(), name='index'),
    
    path('informes', views.InformesJugada.as_view() ,name="informarJugada"),

    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)