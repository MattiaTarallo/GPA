import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OpenWeatherService } from '../open-weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public ricercaMeteoForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private openWeather: OpenWeatherService
    ){ }

  ngOnInit() {
    this.ricercaMeteoForm = this.formBuilder.group( {
      location: ['']
    });
  }

  inviaAOpenWeather(valoriForm) {
    console.log(valoriForm);
    this.openWeather.prendiMeteo(valoriForm.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
