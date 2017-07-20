import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { NgProgressService } from 'ngx-progressbar';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public Animes = []

  private offset: number = 0
  private fetchOnce: boolean = false

  constructor(private http: HttpClient, private progressBar: NgProgressService, private router: Router) { }

  ngOnInit() {
    this.progressBar.start()
    this.fetchAnimeList(this.offset)
  }

  fetchAnimeList(offset){
    let url = 'https://kitsu.io/api/edge/anime?page[limit]=9&page[offset]=' + offset
    this.http.get(url).map(data=>data['data']).subscribe(anime=>{
      this.Animes = [...this.Animes, ...anime];
      this.progressBar.done()
      this.fetchOnce = false;
    })
  }

  animeDetail(link){
    this.router.navigate(['anime', link])
  }

  onScroll(){
    if(!this.fetchOnce){
      this.fetchOnce = true
      this.offset += 9
      this.progressBar.start()
      this.fetchAnimeList(this.offset)
    }
  }

}
