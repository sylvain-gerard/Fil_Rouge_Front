import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireLieesSuspectComponent } from './affaire-liees-suspect.component';

describe('AffaireLieesSuspectComponent', () => {
  let component: AffaireLieesSuspectComponent;
  let fixture: ComponentFixture<AffaireLieesSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireLieesSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireLieesSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
