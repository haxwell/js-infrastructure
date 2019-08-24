import { TestBed } from '@angular/core/testing';

import { FirstLibraryService } from './first-library.service';

describe('FirstLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstLibraryService = TestBed.get(FirstLibraryService);
    expect(service).toBeTruthy();
  });
});
