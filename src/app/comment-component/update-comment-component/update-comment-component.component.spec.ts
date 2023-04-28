import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommentComponentComponent } from './update-comment-component.component';

describe('UpdateCommentComponentComponent', () => {
  let component: UpdateCommentComponentComponent;
  let fixture: ComponentFixture<UpdateCommentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCommentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCommentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
