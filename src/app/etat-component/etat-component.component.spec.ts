import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatComponentComponent } from './etat-component.component';

describe('EtatComponentComponent', () => {
  let component: EtatComponentComponent;
  let fixture: ComponentFixture<EtatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
