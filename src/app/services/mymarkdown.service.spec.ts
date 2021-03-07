import { TestBed } from '@angular/core/testing';

import { MymarkdownService } from './mymarkdown.service';

describe('MymarkdownService', () => {
  let service: MymarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MymarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
