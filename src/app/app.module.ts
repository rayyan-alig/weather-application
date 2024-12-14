import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule], // Add HttpClientModule to imports
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule { }
