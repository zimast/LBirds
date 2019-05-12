import { TestBed } from '@angular/core/testing';

import { GetRandomBirdNameOptionsService } from './get-random-bird-name-options.service';

describe('GetRandomBirdNameOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRandomBirdNameOptionsService = TestBed.get(GetRandomBirdNameOptionsService);
    expect(service).toBeTruthy();
  });
});
