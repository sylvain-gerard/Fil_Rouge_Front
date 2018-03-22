import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeAffaireComponent } from './vehicule-affaire.component';

describe('VehiculeAffaireComponent', () => {
  let component: VehiculeAffaireComponent;
  let fixture: ComponentFixture<VehiculeAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
