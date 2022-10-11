import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  weatherData: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.currentWeather.subscribe(
      (data: Weather) => (this.weatherData = data)
    );
  }
}
