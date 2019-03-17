import { TestBed, inject } from '@angular/core/testing';

import { MarksheetService } from './marksheet.service';

describe('MarksheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarksheetService]
    });
  });

  it('should be created', inject([MarksheetService], (service: MarksheetService) => {
    expect(service).toBeTruthy();
  }));
});
