import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentComponentComponent } from './add-comment-component.component';

describe('AddCommentComponentComponent', () => {
  let component: AddCommentComponentComponent;
  let fixture: ComponentFixture<AddCommentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
