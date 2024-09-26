import { Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HomeComponent } from './components/home/home.component';
import { EmpleadosEmpresaComponent } from './components/empleados-empresa/empleados-empresa.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', redirectTo: '/home' },
    { path: 'empresas', component: EmpresasComponent },
    { path: 'empleados/:id', component: EmpleadosEmpresaComponent },
    { path: 'empleados', component: EmpleadosComponent },
];
