import { TestBed } from '@angular/core/testing';

import { AuthentiCationGuard } from './authenti-cation.guard';

describe('AuthentiCationGuard', () => {
  let guard: AuthentiCationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentiCationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
