import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairesLieesAarmeComponent } from './affaires-liees-aarme.component';

describe('AffairesLieesAarmeComponent', () => {
  let component: AffairesLieesAarmeComponent;
  let fixture: ComponentFixture<AffairesLieesAarmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffairesLieesAarmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffairesLieesAarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
