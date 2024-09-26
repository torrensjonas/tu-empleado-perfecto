import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados-empresa',
  templateUrl: './empleados-empresa.component.html',
  styleUrls: ['./empleados-empresa.component.css']
})
export class EmpleadosEmpresaComponent implements OnInit {
  empleados: any[] = [];
  newEmpleado = { nombre_completo: '', rut: '', email: '' };
  empresaId: number;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.empresaId = +this.route.snapshot.paramMap.get('id')!; 
  }

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this.apiService.getEmpleadosEmpresa(this.empresaId).subscribe(data => {
      this.empleados = data;
    });
  }

  createEmpleado(): void {
    this.apiService.createEmpleado(this.empresaId, this.newEmpleado).subscribe(() => {
      this.loadEmpleados();
      this.newEmpleado = { nombre_completo: '', rut: '', email: '' };
    });
  }
}

