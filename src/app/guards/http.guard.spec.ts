import { TestBed, async, inject } from '@angular/core/testing';

import { HttpGuard } from './http.guard';

describe('HttpGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGuard]
    });
  });

  it('should ...', inject([HttpGuard], (guard: HttpGuard) => {
    expect(guard).toBeTruthy();
  }));
});
