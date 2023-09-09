import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from "@angular/common/http";
import * as WeatherActions from '../store/weather.actions';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Weather } from '../weather.model';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromApp from '../reducers/index'
import { Store } from '@ngrx/store';


const weatherAPI: string = "https://api.open-meteo.com/v1/forecast?";

@Injectable()
export class WeatherEffects {

   @Effect()
   fetchWeather = this.actions$.pipe(ofType(WeatherActions.WeatherActionTypes.LoadWeathers),
   switchMap((loadWeathersAction: WeatherActions.LoadWeathers) => {
     this.router.navigate(['/home',loadWeathersAction.payload], {relativeTo: this.route});
     return this.httpClient.get<Weather>(weatherAPI + 'latitude=' + loadWeathersAction.payload[0] + "&longitude=" + loadWeathersAction.payload[1] +
      "&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&forecast_days=1" );
   }),map((weather: Weather) => {
      return weather;
   }), map((weather) => {
      return new WeatherActions.LoadWeathersSuccess(weather);
   }),
   catchError((errorResponse) => {
      if(!errorResponse.error || !errorResponse.error.error) {
        return of(new WeatherActions.LoadWeathersFailure({error: errorResponse.message}));
      }
      return of(new WeatherActions.LoadWeathersFailure(errorResponse));
   }),
   );

   @Effect({dispatch: false})
   addWeatherToFavorites = this.actions$.pipe(ofType(WeatherActions.WeatherActionTypes.AddToFavorites),
   switchMap((addToFavoritesAction: WeatherActions.AddToFavorites) => {
         return of(localStorage.setItem("name", JSON.stringify(addToFavoritesAction.payload)));
   }));


   @Effect({dispatch: false})
   unFavorite = this.actions$.pipe(ofType(WeatherActions.WeatherActionTypes.UnFavorite),
   switchMap((unFavoriteAction: WeatherActions.UnFavorite) => {
      return of(localStorage.removeItem(''));
   }));

   @Effect()
   fetchWeathers = this.actions$.pipe(ofType(WeatherActions.WeatherActionTypes.FetchWeathers),
   switchMap(() => {
    return this.httpClient.get<Weather>('https://weather-angular-ionic-default-rtdb.firebaseio.com/weathers.json');
   }), map((weathers) => {
      return Object.entries(weathers).map((weather) => { return weather[1] });
   }), map((mappedWeathers) => {
        return new WeatherActions.SetWeathers(mappedWeathers);
   }));

   @Effect({dispatch: false})
   AddWeather = this.actions$.pipe(ofType(WeatherActions.WeatherActionTypes.AddWeather),
   withLatestFrom(this.store.select('weather')),
   switchMap(([actionData, weatherState]) => {
    return this.httpClient.put('https://weather-angular-ionic-default-rtdb.firebaseio.com/weathers/'+ weatherState.lat_and_lon[0] + '-' + weatherState.lat_and_lon[1] + '.json',
       weatherState.weather);
   }));

   @Effect({dispatch: false})
   AddPicture = this.actions$.pipe(ofType(WeatherActions.WeatherActionTypes.AddPicture),
   withLatestFrom(this.store.select('weather')),
   switchMap(([actionData, weatherState]) => {
    return this.httpClient.patch('https://weather-angular-ionic-default-rtdb.firebaseio.com/weathers/'+ weatherState.lat_and_lon[0] + '-' + weatherState.lat_and_lon[1] + '.json',
       {picture: weatherState.picture});
   }));

  constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private store: Store<fromApp.AppState>) {}

}
