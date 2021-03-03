import { TestBed } from '@angular/core/testing';

import { Mod7Service } from './mod7.service';

describe('Mod7Service', () => {
  let service: Mod7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
