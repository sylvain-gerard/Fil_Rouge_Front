import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairesLieesAuVehiculeComponent } from './affaires-liees-au-vehicule.component';

describe('AffairesLieesAuVehiculeComponent', () => {
  let component: AffairesLieesAuVehiculeComponent;
  let fixture: ComponentFixture<AffairesLieesAuVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffairesLieesAuVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairesLieesAuVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
