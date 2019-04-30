import { TestBed } from '@angular/core/testing';

import { DataSendService } from './data-send.service';

describe('DataSendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSendService = TestBed.get(DataSendService);
    expect(service).toBeTruthy();
  });
});
