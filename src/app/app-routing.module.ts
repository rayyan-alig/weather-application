import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: WeatherComponent }, // Default route, could be HomeComponent or WeatherComponent
  { path: 'weather', component: WeatherComponent },
  { path: 'home', component: HomeComponent },
  // Add more routes as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
