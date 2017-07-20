import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgProgressModule } from 'ngx-progressbar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ListComponent } from "../../components/list/list.component";
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { AnimeListComponent } from '../../pages/anime-list/anime-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AnimeListComponent }
    ]),
    InfiniteScrollModule
  ],
  declarations: [
    ListComponent,
    MenuListComponent,
    ArticleCardComponent,
    AnimeListComponent
  ]
})
export class AnimeListModule { }
