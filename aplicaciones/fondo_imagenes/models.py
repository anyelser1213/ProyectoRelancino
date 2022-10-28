import os
import shutil#libreria para borrar carpetas esten o no llenas
from django.conf import settings
from django.db import models

# Create your models here.


#def fondo_login(instance, filename):
  
#    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
#    return 'img/fondos/{0}/{1}'.format(instance.nombre, filename)


class Login(models.Model):

    #fondo_login = models.ImageField(upload_to="login/imagenes/",blank=True, null=True)
    fondo_login = models.ImageField(upload_to="login/imagenes/fondo/",blank=True, null=True)
    logo_login = models.ImageField(upload_to='login/imagenes/logo/',blank=True, null=True)
    
    

    class Meta:
        
        verbose_name = "Fondo"
        verbose_name_plural = "Fondos"
        db_table = 'fondos'

    
    def __str__(self):
        return "Fondo: "+str(self.fondo_login.name)+" ----- Logo: "+str(self.logo_login.name)

    def save(self, *args, **kwargs): 

        print("FONDOS, metodo save") 
        print(self.fondo_login.name)
        print("con nombre: ",self.fondo_login.name)
        
        #self.video.name = self.categoria,"/",self.mes
        #aux = os.path.join(self.categoria,self.mes,self.video.name)
        #print(aux)
        #self.video.name = aux


        ######
            
        try:
            #Para borrar el directorio y todo lo que haya dentro
            #ruta = os.path.join(settings.MEDIA_ROOT,'login','imagenes',self.imagen)
            
            #Con esto borramos carpetas
            #shutil.rmtree(ruta)
            #print(ruta)

            pass

        except OSError as e:

            print(f"Error:{ e.strerror}")

        #################







        #indice_final = 
        #self.imagen.name = 'fondos'+str(self.nombre,self.imagen.name)
        print(self.fondo_login)
        #print("prueba: ",self.video.name[:self.video.name.index('.')])
        
        #self.nombre = self.video.name #[:self.video.name.index('.')] #Guardamos el nombre del video
        #self.video.name = os.path.join(str(self.categoria),str(self.subcategoria),self.video.name)#Guardamos la ruta
        #return False
        super(Login, self).save(*args, **kwargs)