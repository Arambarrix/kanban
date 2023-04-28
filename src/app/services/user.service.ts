import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url :string;
  constructor(private http: HttpClient) {
    this.url ="http://localhost:8080/users" 
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"/");
  }
  createOne(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}`, user);
  }

}
