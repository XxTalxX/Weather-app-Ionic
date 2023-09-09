import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { HistoryPageComponent } from './history-page.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild([{ path: '', component: HistoryPageComponent }])],
  declarations: [HistoryPageComponent],
  exports: [HistoryPageComponent],
})
export class LibraryPageModule {}
