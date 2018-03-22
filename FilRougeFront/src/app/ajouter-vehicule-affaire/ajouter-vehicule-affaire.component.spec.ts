import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVehiculeAffaireComponent } from './ajouter-vehicule-affaire.component';

describe('AjouterVehiculeAffaireComponent', () => {
  let component: AjouterVehiculeAffaireComponent;
  let fixture: ComponentFixture<AjouterVehiculeAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterVehiculeAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVehiculeAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
