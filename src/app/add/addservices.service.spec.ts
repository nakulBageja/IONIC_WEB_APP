import { TestBed } from '@angular/core/testing';

import { AddservicesService } from './addservices.service';

describe('AddservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddservicesService = TestBed.get(AddservicesService);
    expect(service).toBeTruthy();
  });
});
