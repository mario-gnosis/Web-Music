import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicApi } from '../music.api';

@Injectable()
export class FavoritesService {

  constructor( private http: HttpClient) { }

  findById(id: string) {
    return this.http.get(`${MusicApi}/api/user-favorites/${id}`);
  }

}
