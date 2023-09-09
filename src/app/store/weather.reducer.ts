import * as WeatherActions from '../store/weather.actions';
import { Weather } from '../weather.model'


export const weatherFeatureKey = 'weather';

export interface WeatherState {
  weather: Weather;
  error: {error: string};
  loading: boolean;
  lat_and_lon: [string, string];
  picture: string,
  history: Weather[]
}

export const initialState: WeatherState = {
  weather: {
    latitude: 0,
    longitude: 0,
    generationtime_ms: 0,
    utc_offset_seconds: 0,
    timezone: '',
    timezone_abbreviation: '',
    elevation: 0,
    hourly_units: null!,
    hourly: null!,
  },
  picture: '',
  lat_and_lon: ['', ''],
  error: null!,
  loading: false,
  history: []
};

export function weatherReducer(state = initialState, action: WeatherActions.WeatherActions): WeatherState {
  switch (action.type) {
    case WeatherActions.WeatherActionTypes.LoadWeathers:
      return {
        ...state,
        lat_and_lon: action.payload,
        loading: true
      };

    case WeatherActions.WeatherActionTypes.LoadWeathersSuccess:
      return {
        ...state,
        weather: {...action.payload},
        loading: false,
      };

      case WeatherActions.WeatherActionTypes.LoadWeathersFailure:
        return {
          ...state,
          weather: null!,
          error: action.payload,
          loading: false
        };

       case WeatherActions.WeatherActionTypes.AddWeather:
        return {
          ...state,
          lat_and_lon: action.payload,
          loading: false
        }

        case WeatherActions.WeatherActionTypes.AddPicture:
          return {
            ...state,
            picture: action.payload,
            loading: false
          }

        case WeatherActions.WeatherActionTypes.SetWeathers:
          return {
            ...state,
            history: [...action.payload],
            loading: false
          }

    default:
      return state;
  }
}
