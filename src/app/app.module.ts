import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { routes } from './routes';
import { httpReducer, loaderReducer } from './reducers';

import { HttpGuard } from './guards/http.guard';
import { RouteHttpEffects } from "./effects/routeHttp.effect";
import { LoaderEffects } from "./effects/loader.effect";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgProgressModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({ route: httpReducer, loader: loaderReducer }),
    EffectsModule.forRoot([RouteHttpEffects, LoaderEffects])
  ],
  providers: [ HttpGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
