import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgProgressService } from 'ngx-progressbar';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public Articles = []

  private offset: number = 0
  private fetchOnce: boolean = false

  constructor(private http: HttpClient, private progressBar: NgProgressService) { }

  ngOnInit() {
    this.progressBar.start()
    this.fetchAnimeList(this.offset)
  }

  fetchAnimeList(offset){
    let url = 'https://kitsu.io/api/edge/anime?page[limit]=9&page[offset]=' + offset
    this.http.get(url).map(data=>data['data']).subscribe(anime=>{
      this.Articles = [...this.Articles, ...anime];
      this.progressBar.done()
      this.fetchOnce = false;
    })
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
