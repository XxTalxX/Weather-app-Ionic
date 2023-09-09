import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            canActivate: [AuthGuard],
            loadChildren: () => import('./home/home-page.module').then((m) => m.HomePageModule),
          },
          {
            path: 'history',
            canActivate: [AuthGuard],
            loadChildren: () => import('./history/history-page.module').then((m) => m.LibraryPageModule),
          },
          {
            path: 'auth',
            loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
          }
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
