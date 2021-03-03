import { TestBed } from '@angular/core/testing';

import { Mod8Service } from './mod8.service';

describe('Mod8Service', () => {
  let service: Mod8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
