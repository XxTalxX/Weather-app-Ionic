import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherEffects } from './store/weather.effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './auth/store/auth.effects';


@NgModule({
  imports: [BrowserModule,
            FormsModule,
            AppRoutingModule,
            HttpClientModule,
            EffectsModule.forRoot([WeatherEffects, AuthEffects]),
            StoreModule.forRoot(reducers, { metaReducers }),
            IonicModule.forRoot()],
  declarations: [AppComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
