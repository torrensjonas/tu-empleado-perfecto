import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas: any[] = [];
  newEmpresa = { nombre: '', direccion: '', rut: '', telefono: '', email: '' };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(): void {
    this.apiService.getEmpresas().subscribe(data => {
      this.empresas = data;
    });
  }

  createEmpresa(): void {
    this.apiService.createEmpresa(this.newEmpresa).subscribe(() => {
      this.loadEmpresas();
      this.newEmpresa = { nombre: '', direccion: '', rut: '', telefono: '', email:'' };
    });
  }
}

