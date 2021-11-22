import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgenciaComponent } from './create-agencia.component';

describe('CreateAgenciaComponent', () => {
  let component: CreateAgenciaComponent;
  let fixture: ComponentFixture<CreateAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
