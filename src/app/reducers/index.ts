import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { weatherReducer, WeatherState } from '../store/weather.reducer';
import { authReducer, State} from '../auth/store/auth.reducer';



export interface AppState {
  weather: WeatherState;
  auth: State;
};

export const reducers: ActionReducerMap<AppState, any> = {
  weather: weatherReducer,
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
