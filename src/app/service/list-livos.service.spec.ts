import { TestBed } from '@angular/core/testing';

import { ListLivosService } from './list-livos.service';

describe('ListLivosService', () => {
  let service: ListLivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListLivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
