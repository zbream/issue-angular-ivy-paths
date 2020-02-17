import { TestBed } from '@angular/core/testing';

import { MyLibFirstService } from './my-lib-first.service';

describe('MyLibFirstService', () => {
  let service: MyLibFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
