import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() changeDegrees: boolean;
  weatherData: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.currentWeather.subscribe((data: Weather) => {
      this.weatherData = data;
      if (this.changeDegrees) {
        this.weatherData.temp = (this.weatherData.temp - 32) * 0.5556;
      }
    });
  }

  ngOnChanges() {
    if (this.weatherData) {
      if (this.changeDegrees) {
        this.weatherData.temp = (this.weatherData.temp - 32) * 0.5556;
      } else {
        this.weatherData.temp = this.weatherData.temp * 1.8 + 32;
      }
    }
  }
}
