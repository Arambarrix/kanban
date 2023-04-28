import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupportComponentComponent } from './update-support-component.component';

describe('UpdateSupportComponentComponent', () => {
  let component: UpdateSupportComponentComponent;
  let fixture: ComponentFixture<UpdateSupportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSupportComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSupportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
