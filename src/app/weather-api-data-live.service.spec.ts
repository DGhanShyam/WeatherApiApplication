import { TestBed } from '@angular/core/testing';

import { WeatherApiDataLiveService } from './weather-api-data-live.service';

describe('WeatherApiDataLiveService', () => {
  let service: WeatherApiDataLiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApiDataLiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
