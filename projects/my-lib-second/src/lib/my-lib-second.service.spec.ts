import { TestBed } from '@angular/core/testing';

import { MyLibSecondService } from './my-lib-second.service';

describe('MyLibSecondService', () => {
  let service: MyLibSecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibSecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
