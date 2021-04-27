import {Pipe, Component, OnInit, Input } from '@angular/core';
import {WeatherApiDataService} from '../weather-api-data.service'
import {WeatherApiDataLiveService} from '../weather-api-data-live.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Input() ojb: any

  WeatherData: any = [];
  weatherDataLive: any = [];
  celcius: any = [];
    constructor(private urlData: WeatherApiDataService,
      private urlWeather: WeatherApiDataLiveService,
       private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // console.log(this.ojb);
    // console.log(this.ojb[0].Fname);

    this.urlData.fetchData( this.ojb[0].pincode).subscribe(data=> {
      console.log(data);     //api
      this.WeatherData= data;
      console.log(this.WeatherData[0].Status);
      if ( this.WeatherData[0].Status ==  "Success"    ){
      // console.log(this.WeatherData);
      // console.log(this.WeatherData[0].PostOffice[0]);
      // console.log(this.WeatherData[0].PostOffice[0].District);
      console.log(this.WeatherData[0].PostOffice[0].Circle);
    }else{this._snackBar.open('Invalid Pincode refresh browser', '');}


    })
    this.urlWeather.fetchWeather(this.ojb[0].pincode).subscribe(data=>{
      console.log("weather");
      this.weatherDataLive= data;
      console.log(this.weatherDataLive.cod);
      if ( this.weatherDataLive.cod == 200    ){

      console.log(this.weatherDataLive.main);
      console.log(this.weatherDataLive.main.temp);
      // this.celcius= this.weatherDataLive.main.temp -- 273.15;
    }else{this._snackBar.open('Invalid Pincode , refresh browser', '');}
  })

}

}
