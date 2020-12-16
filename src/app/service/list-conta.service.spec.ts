import { TestBed } from '@angular/core/testing';

import { ListContaService } from './list-conta.service';

describe('ListContaService', () => {
  let service: ListContaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListContaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
