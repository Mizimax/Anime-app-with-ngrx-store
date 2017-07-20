import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable() 
export class RouteHttpEffects {

  constructor(private actions: Actions, private http: HttpClient, private store: Store<any>) {}

  @Effect() getAnime = this.actions.ofType('GET_ANIME').
    switchMap((action:any) =>{
        this.store.dispatch({type: 'LOADING_START', payload: { success: false}})
        return this.http.get('https://kitsu.io/api/edge/anime/'+action.payload.id)
    }).
    map(data =>({type: 'GET_ANIME_SUCCESS', payload: { success: true, data: { url: 'https://kitsu.io/api/edge/anime/'+data['data'].id, data: data['data'] } }}));

  @Effect() getAnimeList = this.actions.ofType('GET_ANIME_LIST').
    switchMap(payload => this.http.get('https://kitsu.io/api/edge/anime?page[limit]=9&page[offset]=0')).
    map(data => ({type: 'GET_ANIME_SUCCESS', payload: { success: true, data }}));

  @Effect() getAnimeSuccess = this.actions.ofType('GET_ANIME_SUCCESS').
    map(data => ({type: 'LOADING_END', payload: { success: true}}))

}