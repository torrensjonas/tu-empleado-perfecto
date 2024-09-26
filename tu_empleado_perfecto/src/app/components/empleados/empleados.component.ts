import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this.apiService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }
}