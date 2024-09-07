import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSitiosTuristicosComponent } from './lista-sitios-turisticos.component';

describe('ListaSitiosTuristicosComponent', () => {
  let component: ListaSitiosTuristicosComponent;
  let fixture: ComponentFixture<ListaSitiosTuristicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSitiosTuristicosComponent]
    });
    fixture = TestBed.createComponent(ListaSitiosTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
