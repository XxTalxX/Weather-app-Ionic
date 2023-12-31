import { Component, OnInit } from '@angular/core';
import * as fromApp from './reducers/index';
import * as AuthActions from './auth/store/auth.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
