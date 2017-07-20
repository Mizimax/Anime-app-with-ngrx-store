import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { NgProgressService } from 'ngx-progressbar';


@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  public Anime = [];

  private url: string;

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.store.select('route').subscribe(data=>{
        let value = data.filter(val=>val.success == true)
        if(value[value.length-1]){
          this.Anime = value[value.length-1].data
        }
      })
    })
  }

}
