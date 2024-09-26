from rest_framework import serializers
from .models import Empresa, Empleado

class EmpresaSerializer(serializers.ModelSerializer):
    """
        serializer del modelo empresa
    """
    class Meta:
        model = Empresa
        fields = '__all__'


class EmpleadoSerializer(serializers.ModelSerializer):
    """
        serializer del modelo empleado donde tambien mostramos el nombre de la empresa a la que pertenece 
    """
    empresa_nombre = serializers.CharField(source='empresa.nombre', read_only=True)
    class Meta:
        model = Empleado
        fields = '__all__'