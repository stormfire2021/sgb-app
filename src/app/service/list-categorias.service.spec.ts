import { TestBed } from '@angular/core/testing';

import { ListCategoriasService } from './list-categorias.service';

describe('ListCategoriasService', () => {
  let service: ListCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
