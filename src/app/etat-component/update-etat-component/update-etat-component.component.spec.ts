import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtatComponentComponent } from './update-etat-component.component';

describe('UpdateEtatComponentComponent', () => {
  let component: UpdateEtatComponentComponent;
  let fixture: ComponentFixture<UpdateEtatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtatComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEtatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
