import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }


  getWeatherDetails() {                        // event binding method 
    this.weatherService.getWeather(this.city).subscribe((data) => { this.weatherData = data; });
  }
}

