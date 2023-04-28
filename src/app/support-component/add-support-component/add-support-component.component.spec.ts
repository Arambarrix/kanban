import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupportComponentComponent } from './add-support-component.component';

describe('AddSupportComponentComponent', () => {
  let component: AddSupportComponentComponent;
  let fixture: ComponentFixture<AddSupportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSupportComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSupportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
