export class Weather {
  name: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  main: string;

  constructor(
    name: string,
    temp: number,
    maxTemp: number,
    minTemp: number,
    main: string
  ) {
    this.name = name;
    this.temp = temp;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.main = main;
  }
}
