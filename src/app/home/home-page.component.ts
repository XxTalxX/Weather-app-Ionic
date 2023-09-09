import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromApp from '../reducers/index';
import { Store } from '@ngrx/store';
import * as WeatherActions from '../store/weather.actions';
import { Weather } from '../weather.model';
import { Subscription } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';
import * as AuthActions from '../auth/store/auth.actions';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  errorMessage!: {error: string};
  weather!: Weather;
  isLoading: boolean = false;
  weatherSubscription!: Subscription;
  image_src: string | undefined = "https://ionicframework.com/docs/img/demos/thumbnail.svg";



  addWeatherToDataBase = async () => {
    if(this.isLoading === true) {
      setTimeout(this.addWeatherToDataBase, 100);
    } else {
        this.store.dispatch(new WeatherActions.AddWeather([Number(this.weather.latitude).toFixed(2).toString().replace('.', '_'),
        Number(this.weather.longitude).toFixed(2).toString().replace('.', '_')]));
        localStorage.setItem('latest', JSON.stringify(this.weather));
      }
    }

  getGeoLoaction = async () => {
    Geolocation.getCurrentPosition().then((currentGeo) => {
      this.store.dispatch(new WeatherActions.LoadWeathers([currentGeo.coords.latitude.toString(), currentGeo.coords.longitude.toString()]));
      this.image_src = "https://ionicframework.com/docs/img/demos/thumbnail.svg";
      this.addWeatherToDataBase();
      return currentGeo;
    }).catch(err => console.log(err));
  }

  takePicture = async () => {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((image) => {
      this.image_src = image.webPath;
      this.store.dispatch(new WeatherActions.AddPicture(this.image_src?.substring(this.image_src.indexOf(':') + 1)!));
    }).catch(err => console.log(err));
  }

  ngOnInit(): void {
    this.weatherSubscription = this.store.select('weather').subscribe((weatherState) => {
     this.isLoading = weatherState.loading;
     this.errorMessage = weatherState.error;
     this.weather = weatherState.weather;
     const latestWeather = localStorage.getItem('latest');
     if(JSON.parse(latestWeather!) !== null) {
      this.weather = JSON.parse(latestWeather!);
     }
    });
  }

  constructor(private store: Store<fromApp.AppState>) {}

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy(): void {
    if(this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }
}


