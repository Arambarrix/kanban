import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketComponentComponent } from './add-ticket-component.component';

describe('AddTicketComponentComponent', () => {
  let component: AddTicketComponentComponent;
  let fixture: ComponentFixture<AddTicketComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTicketComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTicketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
