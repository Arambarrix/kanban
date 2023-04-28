import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketComponentComponent } from './update-ticket-component.component';

describe('UpdateTicketComponentComponent', () => {
  let component: UpdateTicketComponentComponent;
  let fixture: ComponentFixture<UpdateTicketComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTicketComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTicketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
