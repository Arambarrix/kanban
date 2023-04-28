import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagComponentComponent } from './add-tag-component.component';

describe('AddTagComponentComponent', () => {
  let component: AddTagComponentComponent;
  let fixture: ComponentFixture<AddTagComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTagComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
