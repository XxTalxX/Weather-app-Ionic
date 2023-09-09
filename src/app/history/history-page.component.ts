import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Weather } from '../weather.model';
import * as WeatherActions from '../store/weather.actions';
import * as fromApp from '../reducers/index';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth/store/auth.actions';



@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent  implements OnInit, OnDestroy, AfterViewInit {

  errorMessage!: {error: string | unknown};
  weatherSubscription!: Subscription;
  weatherHistory!: Weather[];


  constructor(private store: Store<fromApp.AppState>) {}

  ngAfterViewInit(): void {
    this.store.dispatch(new WeatherActions.FetchWeathers());
  }

  ngOnInit(): void {
    this.weatherSubscription = this.store.select('weather').subscribe((weatherState) => {
      this.errorMessage = weatherState.error;
      this.weatherHistory = weatherState.history
    });
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}

