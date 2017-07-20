import { Injectable } from '@angular/core';
import { NgProgressService } from 'ngx-progressbar';

import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/map';

@Injectable() 
export class LoaderEffects {
  constructor(private actions: Actions, private progressBar:NgProgressService) {}

  @Effect({dispatch: false}) loaderStart = this.actions.ofType('LOADING_START').map(()=>{
      this.progressBar.start()
  })
  @Effect({dispatch: false}) loaderEnd = this.actions.ofType('LOADING_END').map(()=>{
      this.progressBar.done()
  })

}