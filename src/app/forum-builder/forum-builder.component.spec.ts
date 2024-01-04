import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBuilderComponent } from './forum-builder.component';

describe('ForumBuilderComponent', () => {
  let component: ForumBuilderComponent;
  let fixture: ComponentFixture<ForumBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
