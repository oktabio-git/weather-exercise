import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() changeDegrees: boolean;
  weatherData: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.currentWeather.subscribe((data: Weather) => {
      this.weatherData = data;
      if (this.changeDegrees) {
        this.weatherData.maxTemp = (this.weatherData.maxTemp - 32) * 0.5556;
        this.weatherData.minTemp = (this.weatherData.minTemp - 32) * 0.5556;
      }
    });
  }

  ngOnChanges() {
    if (this.weatherData) {
      if (this.changeDegrees) {
        this.weatherData.maxTemp = (this.weatherData.maxTemp - 32) * 0.5556;
        this.weatherData.minTemp = (this.weatherData.minTemp - 32) * 0.5556;
      } else {
        this.weatherData.maxTemp = this.weatherData.maxTemp * 1.8 + 32;
        this.weatherData.minTemp = this.weatherData.minTemp * 1.8 + 32;
      }
    }
  }
}
