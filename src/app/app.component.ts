import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCelsius: boolean;
  weatherBg: string = '../assets/images/default.jpg';

  setBgWeather(data: string) {
    this.weatherBg = '../assets/images/' + data + '.jpg';
  }
}
