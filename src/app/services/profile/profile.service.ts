import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicApi } from '../music.api';

@Injectable()
export class ProfileService {

  constructor( private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(`${MusicApi}/api/users/me`);
  }

}
