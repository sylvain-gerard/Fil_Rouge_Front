import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterArmeAaffaireComponent } from './ajouter-arme-aaffaire.component';

describe('AjouterArmeAaffaireComponent', () => {
  let component: AjouterArmeAaffaireComponent;
  let fixture: ComponentFixture<AjouterArmeAaffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterArmeAaffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterArmeAaffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
