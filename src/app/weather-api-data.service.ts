import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiDataService {

  constructor(private http:HttpClient) { }

  fetchData(val:any ){

    let url= "https://api.postalpincode.in/pincode/"+val;
    return this.http.get(url);
  }


}
