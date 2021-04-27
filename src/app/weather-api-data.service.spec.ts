import { TestBed } from '@angular/core/testing';

import { WeatherApiDataService } from './weather-api-data.service';

describe('WeatherApiDataService', () => {
  let service: WeatherApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
