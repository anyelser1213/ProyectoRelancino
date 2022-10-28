import shutil#libreria para borrar carpetas esten o no llenas
from django.db import models

# Create your models here.


def user_directory_path(instance, filename):
  
    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    return 'img/fondos/{0}/{1}'.format(instance.nombre, filename)


class Login(models.Model):

    fondo_login = models.CharField(max_length=200,unique=True)
    imagen = models.ImageField(upload_to=user_directory_path,blank=True, null=True)
    #imagen_logo = models.ImageField(upload_to='img/fondos/imagen_logo/',blank=True, null=True)
    
    

    class Meta:
        
        verbose_name = "Fondo"
        verbose_name_plural = "Fondos"
        db_table = 'fondos'

    
    def __str__(self):
        return str(self.nombre)

    def save(self, *args, **kwargs): 

        print("FONDOS, metodo save") 
        print(self.imagen)
        print("con nombre: ",self.imagen.name)
        
        #self.video.name = self.categoria,"/",self.mes
        #aux = os.path.join(self.categoria,self.mes,self.video.name)
        #print(aux)
        #self.video.name = aux


        ######
            
        try:
            #Para borrar el directorio y todo lo que haya dentro
            ruta = os.path.join(settings.MEDIA_ROOT,'img','fondos',self.nombre)
            
            #Con esto borramos carpetas
            shutil.rmtree(ruta)
            print(ruta)

        except OSError as e:

            print(f"Error:{ e.strerror}")

        #################







        #indice_final = 
        #self.imagen.name = 'fondos'+str(self.nombre,self.imagen.name)
        print(self.imagen)
        #print("prueba: ",self.video.name[:self.video.name.index('.')])
        
        #self.nombre = self.video.name #[:self.video.name.index('.')] #Guardamos el nombre del video
        #self.video.name = os.path.join(str(self.categoria),str(self.subcategoria),self.video.name)#Guardamos la ruta
        #return False
        super(Fondos, self).save(*args, **kwargs)