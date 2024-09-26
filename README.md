# Tu Empleado Perfecto

Una aplicación para gestionar empresas y empleados desarrollada con Django REST Framework para el backend y Angular para el frontend.

### Características principales:
- Agregar y listar empresas y empleados.
- Backend: API REST con Django REST Framework.
- Frontend: Angular con Angular Material.
- Base de datos: MySQL.
- Manejo de autenticación CORS y conexión a MySQL.

## Requisitos

### Backend:
- Python 3.8 o superior.
- Django 4.x
- Django REST Framework
- PyMySQL
- CORS Headers

### Frontend:
- Node.js (versión 18 o superior).
- Angular CLI (versión 18).
- Angular Material

## Configuración del Backend

1. **Clonar el repositorio**:

```bash
git clone https://github.com/tu-usuario/tu-empleado-perfecto.git
cd tu-empleado-perfecto
```

2. **Backend**:
   - Crear y activar un entorno virtual (opcional pero recomendado):
     
     ```bash
     cd tu_empleado_perfecto_api
     ```

     ```bash
     python -m venv env
     source env/bin/activate  # En Linux/Mac
     .\env\Scripts\activate  # En Windows
     ```

   - Instalar las dependencias:

     ```bash
     pip install -r requirements.txt
     ```

   - Configurar la conexión a MySQL en `settings.py`:

     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.mysql',
             'NAME': 'nombre_de_tu_bd',
             'USER': 'tu_usuario',
             'PASSWORD': 'tu_password',
             'HOST': 'localhost',
             'PORT': '3306',
         }
     }
     ```

   - Asegúrate de tener las siguientes dependencias en tu proyecto:
     - **PyMySQL**: para la conexión con MySQL
     - **CORS Headers**: para manejar las políticas de CORS
     
     ```bash
     pip install pymysql django-cors-headers
     ```

     Agrega `'corsheaders'` a la lista de `INSTALLED_APPS` en `settings.py`, y configura CORS:
     ```python
     CORS_ALLOWED_ORIGINS = [
         "http://localhost:4200",
     ]
     ```

   - Realizar las migraciones:

     ```bash
     python manage.py migrate
     ```

   - Ejecutar el servidor de desarrollo:

     ```bash
     python manage.py runserver
     ```

3. **Frontend**:
   - Dirígete a la carpeta del frontend:
   
     ```bash
     cd tu_empleado_perfecto
     ```

   - Instalar las dependencias de Angular:

     ```bash
     npm install
     ```

   - Ejecutar el servidor de desarrollo:

     ```bash
     ng serve
     ```

4. **Probar la aplicación**:
   - Backend en `http://127.0.0.1:8000/`
   - Frontend en `http://localhost:4200/`

# Desarrollado por Jonás Torrens