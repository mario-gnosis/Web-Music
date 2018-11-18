import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  profileUrl = 'https://songs-api-ubiwhere.now.sh/api/users/me';

  constructor( private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(`${this.profileUrl}`);
  }

}
