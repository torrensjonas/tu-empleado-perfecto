from django.urls import path
from .views import EmpresaView, EmpleadoEmpresaView, EmpleadoView

urlpatterns = [
    path('empresas/', EmpresaView.as_view(), name='empresa-list-create'),
    path('empleados/<int:empresa_id>/', EmpleadoEmpresaView.as_view(), name='empleado-empresa-list-create'),
    path('empleados/', EmpleadoView.as_view(), name='empleado-list-create')
]