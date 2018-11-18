import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicApi } from '../music.api';
import { User } from '../../model/user.model';

@Injectable()
export class UserService {

  usersUrl = 'https://songs-api-ubiwhere.now.sh/api/users';

  constructor( private http: HttpClient) { }

  login(user: User) {
    return this.http.post(`${MusicApi}/api/users`, user);
  }

  findAll() {
    return this.http.get<any[]>(`${MusicApi}/api/users`);
  }

}
