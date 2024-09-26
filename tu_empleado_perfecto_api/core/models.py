from django.db import models

class Empresa(models.Model):
    """
        modelo de la tabla empresa
        solo son opcionales los campos direccion y email 
        el rut debe ser unico 
    """
    nombre = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255, null=True)
    rut = models.CharField(max_length=12, unique=True)
    telefono = models.CharField(max_length=15)
    email = models.EmailField(null=True)

class Empleado(models.Model):
    """
        modelo de la tabla empleado
        el rut debe ser unico
        esta ralacionada con la tabla empresa, una empresa puede tener muchos empleados y si se elimina una empresa los empleados no se eliminaran 
    """
    empresa = models.ForeignKey(Empresa, related_name='empleados', on_delete=models.SET_NULL, null=True)
    nombre_completo = models.CharField(max_length=255)
    rut = models.CharField(max_length=12, unique=True)
    email = models.EmailField(null=True)

