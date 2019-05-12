import { TestBed } from '@angular/core/testing';

import { GetRandomBirdService } from './get-random-bird.service';

describe('GetRandomBirdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRandomBirdService = TestBed.get(GetRandomBirdService);
    expect(service).toBeTruthy();
  });
});
