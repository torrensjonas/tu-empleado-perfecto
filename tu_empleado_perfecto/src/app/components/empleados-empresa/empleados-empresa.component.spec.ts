import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosEmpresaComponent } from './empleados-empresa.component';

describe('EmpleadosEmpresaComponent', () => {
  let component: EmpleadosEmpresaComponent;
  let fixture: ComponentFixture<EmpleadosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
