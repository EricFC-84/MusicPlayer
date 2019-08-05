import { TestBed } from '@angular/core/testing';

import { SongDataService } from './song-data.service';

describe('SongDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongDataService = TestBed.get(SongDataService);
    expect(service).toBeTruthy();
  });
});
