import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeAffaireComponent } from './arme-affaire.component';

describe('ArmeAffaireComponent', () => {
  let component: ArmeAffaireComponent;
  let fixture: ComponentFixture<ArmeAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmeAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmeAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
