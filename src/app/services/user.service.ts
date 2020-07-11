import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signleUser(id: number)
  {
    return this.http.get<User[]>(`${environment.apiUrl}/users/${id}`);
  }

  createUser(user: User)
  {
    return this.http.post<User[]>(`${environment.apiUrl}/users`, JSON.stringify(user));
  }

  updateUser(id: number, user: User)
  {
    return this.http.put<User[]>(`${environment.apiUrl}/users/${id}`, JSON.stringify(user));
  }
}
