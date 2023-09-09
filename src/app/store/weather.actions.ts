import { Action } from '@ngrx/store';
import { Weather } from '../weather.model';

export enum WeatherActionTypes {
  LoadWeathers = '[Weather] Load Weathers',
  LoadWeathersSuccess = '[Weather] Load Weathers Success',
  LoadWeathersFailure = '[Weather] Load Weathers Failure',
  AddToFavorites = '[Weather] Add To Favorites',
  UnFavorite = '[Weather] UnFavorite',
  AddWeather = '[Weather] Add Weather',
  AddPicture = '[Weather] Add Picture',
  FetchWeathers =  '[Weather] Fetch Weathers',
  SetWeathers = '[Weather] Set Weathers'
}

export class LoadWeathers implements Action {
  readonly type = WeatherActionTypes.LoadWeathers;
  constructor(public payload: [string, string]) {}
}

export class LoadWeathersSuccess implements Action {
  readonly type = WeatherActionTypes.LoadWeathersSuccess;
  constructor(public payload: Weather ) { }
}

export class LoadWeathersFailure implements Action {
  readonly type = WeatherActionTypes.LoadWeathersFailure;
  constructor(public payload: { error: any }) { }
}

export class AddWeather implements Action {
  readonly type = WeatherActionTypes.AddWeather;
  constructor(public payload: [string, string]) {}
}

export class AddPicture implements Action {
  readonly type = WeatherActionTypes.AddPicture;
  constructor(public payload: string) {}
}

export class SetWeathers implements Action {
  readonly type = WeatherActionTypes.SetWeathers;
  constructor(public payload: Weather[]) {}
}

export class FetchWeathers implements Action {
  readonly type = WeatherActionTypes.FetchWeathers;
}

export class AddToFavorites implements Action {
  readonly type = WeatherActionTypes.AddToFavorites;
  constructor(public payload: Weather) {}
}

export class UnFavorite implements Action {
  readonly type = WeatherActionTypes.UnFavorite;
  constructor(public payload: Weather) {}
}




export type WeatherActions = LoadWeathers | LoadWeathersSuccess | LoadWeathersFailure | AddToFavorites | UnFavorite | AddWeather | AddPicture | FetchWeathers| SetWeathers;

