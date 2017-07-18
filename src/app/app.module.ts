import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgProgressModule } from 'ngx-progressbar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';

import { routes } from './routes'
import { reducer } from './reducers';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { ArticleCardComponent } from './components/article-card/article-card.component'

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    HeaderComponent,
    ListComponent,
    MenuListComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgProgressModule,
    InfiniteScrollModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension()
    // ,
    // StoreModule.provideStore(reducer),
    // EffectsModule.run
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
