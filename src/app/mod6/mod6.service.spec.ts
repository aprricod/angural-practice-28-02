import { TestBed } from '@angular/core/testing';

import { Mod6Service } from './mod6.service';

describe('Mod6Service', () => {
  let service: Mod6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
