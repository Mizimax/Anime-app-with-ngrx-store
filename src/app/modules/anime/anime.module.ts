import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AnimeComponent } from '../../pages/anime/anime.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AnimeComponent }
    ]),
  ],
  declarations: [
    AnimeComponent
  ]
})
export class AnimeModule { }
