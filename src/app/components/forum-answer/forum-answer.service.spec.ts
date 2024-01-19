import { TestBed } from '@angular/core/testing';

import { ForumAnswerService } from './forum-answer.service';

describe('ForumAnswerService', () => {
  let service: ForumAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
