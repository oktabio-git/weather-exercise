import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './pages/searcher/searcher.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { DetailsComponent } from './pages/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    WeatherComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
