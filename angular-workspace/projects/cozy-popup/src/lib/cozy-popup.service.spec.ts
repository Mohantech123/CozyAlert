import { TestBed } from '@angular/core/testing';

import { CozyPopupService } from './cozy-popup.service';

describe('CozyPopupService', () => {
  let service: CozyPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CozyPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
