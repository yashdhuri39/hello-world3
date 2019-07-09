import { TestBed } from '@angular/core/testing';

import { IntercomponentService } from './intercomponent.service';

describe('IntercomponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntercomponentService = TestBed.get(IntercomponentService);
    expect(service).toBeTruthy();
  });
});
