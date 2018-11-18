import { SongsService } from '../../services/songs/songs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  songs: Array<any>;

  constructor(
    private _SongsService: SongsService,
    private router: Router ) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this._SongsService.findAll().subscribe(dados => this.songs = dados);
  }

  detail(id: string) {
    console.log(id);

    this.router.navigate(['/details', id]);
  }

}
