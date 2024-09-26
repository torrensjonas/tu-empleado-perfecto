from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Empresa, Empleado
from .serializers import EmpresaSerializer, EmpleadoSerializer
from django.shortcuts import get_object_or_404

class EmpresaView(APIView):
    """
        vista para listar y crear las empresas  
    """
    def get(self, request):
        empresas = Empresa.objects.all()
        serializer = EmpresaSerializer(empresas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = EmpresaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EmpleadoEmpresaView(APIView):
    """
        vista para listar y crear los empleados que pertenecen a una empresa
    """
    def get(self, request, empresa_id):        
        empleados = Empleado.objects.filter(empresa_id=empresa_id)
        serializer = EmpleadoSerializer(empleados, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, empresa_id):        
        empresa = get_object_or_404(Empresa, pk=empresa_id)
        data = request.data
        data['empresa'] = empresa_id
        serializer = EmpleadoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EmpleadoView(APIView):

    """
        vista para listar todos los empleados 
    """    
    def get(self, request):
        empleados = Empleado.objects.all()
        serializer = EmpleadoSerializer(empleados, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)