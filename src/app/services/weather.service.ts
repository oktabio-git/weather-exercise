import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey: string = '13dc7b5fa5931e769c3cba13b5aee73d';
  private weatherInfo = new BehaviorSubject<Weather>(null);
  currentWeather = this.weatherInfo.asObservable();

  constructor(private http: HttpClient) {}

  getWeather(data: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${this.apiKey}&units=imperial`;
    return this.http.get(url);
  }

  updateWeatherInfo(data: Weather) {
    this.weatherInfo.next(data);
  }
}
