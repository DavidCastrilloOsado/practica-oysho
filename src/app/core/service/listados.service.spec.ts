import { TestBed } from '@angular/core/testing';

import { ListadosService } from './listados.service';

describe('ListadosService', () => {
  let service: ListadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
