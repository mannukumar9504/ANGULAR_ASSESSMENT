import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumAnswerComponent } from './forum-answer.component';

describe('ForumAnswerComponent', () => {
  let component: ForumAnswerComponent;
  let fixture: ComponentFixture<ForumAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
