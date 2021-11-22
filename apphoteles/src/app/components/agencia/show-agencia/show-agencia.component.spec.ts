import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAgenciaComponent } from './show-agencia.component';

describe('ShowAgenciaComponent', () => {
  let component: ShowAgenciaComponent;
  let fixture: ComponentFixture<ShowAgenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAgenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
