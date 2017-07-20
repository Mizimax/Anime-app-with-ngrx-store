import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/take'
import 'rxjs/add/operator/skip'

@Injectable()
export class HttpGuard implements CanActivate {

  constructor(private store: Store<any>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(state.url.indexOf('anime') !== -1){
      this.store.dispatch({ type: 'GET_ANIME', payload: { success: false, id: next.url[1].path}})
    }else{
      this.store.dispatch({ type: 'GET_ANIME_LIST', payload: '' })
    }
    return new Promise((resolve)=>{
      this.store.select('route').take(2).skip(1)
        .map(data=>data.filter(val=>val.success == true)).subscribe(value=>{
            resolve(true)
        })
    })
  }
}
