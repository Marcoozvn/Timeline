import { TestBed } from '@angular/core/testing';

import { AcontecimentoService } from './acontecimento.service';

describe('AcontecimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcontecimentoService = TestBed.get(AcontecimentoService);
    expect(service).toBeTruthy();
  });
});
