import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHabitacionComponent } from './show-habitacion.component';

describe('ShowHabitacionComponent', () => {
  let component: ShowHabitacionComponent;
  let fixture: ComponentFixture<ShowHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHabitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
