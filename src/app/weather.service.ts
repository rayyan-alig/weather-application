import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '60792bb858efe815847d39710933c23b'; // our API key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}`
    );
  }
}
