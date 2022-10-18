from django.contrib import admin

from .models import Jugada, TipoJugadas

# Register your models here.

#Esta es otra forma de registrar en el admin
@admin.register(TipoJugadas)
class TipoJugadasAdmin(admin.ModelAdmin):

    #readonly_fields = ('fecha_cierre',)

    #Para indicarle al admin que campos queremos mostrar
    list_display = ('id','nombre','cantidad_digitos','estado_jugada','hora_inicio','hora_cierre','fecha_cierre')#,'fecha_cierre'

    #Para indicar que se va a visualizar como vinculo
    list_display_links = ('nombre',)

    #Para indicar que campos seran editables
    list_editable = ('estado_jugada','hora_inicio','hora_cierre','fecha_cierre')#,'fecha_cierre'

    #Con esto creamos los filtros
    list_filter = ('estado_jugada','fecha_cierre','cantidad_digitos')

    #Paginacion
    list_per_page = 10


    ordering = ('cantidad_digitos','nombre',)


    #Aqui es cuando se va a editar
    fieldsets = (
        #Aqui es para editar
        ("Informacion Esencial", {'fields': ('nombre','cantidad_digitos','cantidad_maxima_repeticion')}),
        ("Fecha", {
            'classes': ('collapse','wide','extrapretty'),
            'fields': ('estado_jugada','hora_inicio','hora_cierre','fecha_cierre'),
        }),
    )




"""

    ordering = ('username',)
    
    #Aqui es cuando se va a editar
    fieldsets = (
        #Aqui es para editar
        ("Informacion Esencial", {'fields': ('username', 'password')}),
        ("Permisologia", {
            'classes': ('wide',),
            'fields': ('is_superuser','admin','activo','groups','user_permissions'),
        }),
    )

    #Aqui es cuando se esta creando
    add_fieldsets = (
        ("Informacion Obligatoria", {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2'),
        }),
        ("Informacion Importante", {
            'classes': ('wide',),
            'fields': ('activo', 'is_superuser','admin', 'cedula','telefono'),
            #'fields': ('activo', 'is_superuser','admin', 'cedula','plan_elegido','rol','telefono'),
        }),
        ("Permisologia", {
            'classes': ('wide',),
            'fields': ('groups','user_permissions',),
        }),
    )


    #Para indicarle al admin que campos queremos mostrar
    list_display = ('id','username','is_superuser','admin','activo','fecha_creacion','ultimo_ingreso')
    #list_display = ('username', 'email','is_superuser','admin','rol','plan_elegido')
    list_filter = ('username','activo')
    
    #Para especificar que campos van a efectuar la busqueda
    search_fields = ('username', 'nombres', 'apellidos')
    filter_horizontal = ()
"""






#Aqui registramos los elementos para que aparezcan en el admin de django(esta es otra forma)
#admin.site.register(Usuarios, UserAdmin)



#admin.site.register(TipoJugadas)
admin.site.register(Jugada)
