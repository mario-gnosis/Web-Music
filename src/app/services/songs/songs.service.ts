import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicApi } from '../music.api';
import { Songs } from './../../model/song.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SongsService {

  constructor( private http: HttpClient) { }

  findAll() {
    return this.http.get<any[]>(`${MusicApi}/api/songs`);
  }

  findById(id: string) {
    return this.http.get(`${MusicApi}/api/songs/${id}`);
  }

  read(id: number): Observable<Songs> {
    return this.http.get<Songs>(`${MusicApi}/api/songs/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${MusicApi}/api/songs/${id}`);
  }

}
