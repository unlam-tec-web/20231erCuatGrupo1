import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNuevoProductoComponent } from './agregar-nuevo-producto.component';

describe('AgregarNuevoProductoComponent', () => {
  let component: AgregarNuevoProductoComponent;
  let fixture: ComponentFixture<AgregarNuevoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarNuevoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarNuevoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
