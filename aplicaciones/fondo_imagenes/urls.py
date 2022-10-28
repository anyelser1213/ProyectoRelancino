from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

app_name ="fondo_imagenes"

urlpatterns = [
    
    #path('', views.Index.as_view(), name='index'),
    
    path('api_login/', views.api_login ,name="api_login"),




    
    
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)