import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSuspectAffaireComponent } from './ajouter-suspect-affaire.component';

describe('AjouterSuspectAffaireComponent', () => {
  let component: AjouterSuspectAffaireComponent;
  let fixture: ComponentFixture<AjouterSuspectAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterSuspectAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSuspectAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
