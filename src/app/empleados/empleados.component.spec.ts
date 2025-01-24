import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosComponent } from './empleados.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EmpleadoComponent', () => {
  let component: EmpleadosComponent;
  let fixture: ComponentFixture<EmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosComponent],
      declarations:[EmpleadosComponent],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});