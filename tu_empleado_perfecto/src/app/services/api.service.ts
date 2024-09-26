import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<any> {
    return this.http.get(`${this.API_URL}/empresas/`);
  }

  createEmpresa(empresa: any): Observable<any> {
    return this.http.post(`${this.API_URL}/empresas/`, empresa);
  }

  getEmpleadosEmpresa(empresaId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/empleados/${empresaId}/`);
  }

  createEmpleado(empresaId: number, empleado: any): Observable<any> {
    return this.http.post(`${this.API_URL}/empleados/${empresaId}/`, empleado);
  }

  getEmpleados(): Observable<any> {
    return this.http.get(`${this.API_URL}/empleados/`);
  }
}
