
from django.contrib import admin

#Los archivos media
from django.conf import settings
from django.views.static import serve
from django.conf.urls.static import static

from django.urls import path, include, re_path

app_name="relancito"
urlpatterns = [
    
    #Administrador Django
    path('admin/', admin.site.urls),

    path('', include('aplicaciones.principal.urls')),
    path('', include('aplicaciones.juegos.urls')),
    path('', include('aplicaciones.juegos.api.urls')),
    path('', include('aplicaciones.login.urls')),
    path('', include('aplicaciones.fondo_imagenes.urls')),
    path('', include('aplicaciones.informes.urls')),
    #path('login', include('login.urls')),


    #Para las apis
    path('api-auth/', include('rest_framework.urls'))
     
] 

urlpatterns +=[
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


