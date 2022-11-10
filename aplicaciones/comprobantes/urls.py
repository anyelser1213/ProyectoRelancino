from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name ="comprobantes"

urlpatterns = [
    #path('', views.Index.as_view(), name='index'),
    
    path('comprobantes', views.InformesJugada.as_view() ,name="informarJugada"),

    #apis para informes
    #path('api_status_comprobantes/', views.api_informes ,name="api_comprobantes"),

    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)