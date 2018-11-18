import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicApi } from '../music.api';
import { User } from '../../model/user.model';

@Injectable()
export class AuthService {

  constructor( private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${MusicApi}/api/auth/login`, user);
  }

  findAll() {
    return this.http.get<any[]>(`${MusicApi}/api/auth/login`);
  }

}
