import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherInterface } from 'src/app/interfaces/weatherInterface';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  searchInput: string;
  weatherData: Weather;
  @Output() parentWeather = new EventEmitter<string>();

  constructor(
    private weatherService: WeatherService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  getWeather() {
    this.weatherService.getWeather(this.searchInput).subscribe(
      (res: WeatherInterface) => {
        this.weatherData = new Weather(
          res.name,
          res.main.temp,
          res.main.temp_max,
          res.main.temp_min,
          res.weather[0].main
        );
        this.weatherService.updateWeatherInfo(this.weatherData);
        this.parentWeather.emit(this.weatherData.main);
      },
      () => {
        this.showError();
      }
    );
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Oops something happend!',
      detail:
        'The city name was not valid, please try again and make sure the name was spelled correctly.',
      life: 5000,
    });
  }
}
