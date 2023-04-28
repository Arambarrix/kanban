import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTagComponentComponent } from './update-tag-component.component';

describe('UpdateTagComponentComponent', () => {
  let component: UpdateTagComponentComponent;
  let fixture: ComponentFixture<UpdateTagComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTagComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
