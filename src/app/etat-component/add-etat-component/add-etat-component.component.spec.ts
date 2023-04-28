import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtatComponentComponent } from './add-etat-component.component';

describe('AddEtatComponentComponent', () => {
  let component: AddEtatComponentComponent;
  let fixture: ComponentFixture<AddEtatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtatComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEtatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
