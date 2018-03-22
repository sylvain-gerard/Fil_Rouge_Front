import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectAffaireComponent } from './suspect-affaire.component';

describe('SuspectAffaireComponent', () => {
  let component: SuspectAffaireComponent;
  let fixture: ComponentFixture<SuspectAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
