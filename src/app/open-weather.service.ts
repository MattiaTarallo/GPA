import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) {
  }
    prendiMeteo(location) {

      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=27958f75392fca131cfdff67fd64aa04&units=metric&lang=it');
   }
}
