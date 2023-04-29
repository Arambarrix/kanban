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
  public findOne(id:string):Observable<User> {
    return this.http.get<User>(this.url+"/"+id);
    
  }
  public deleteOne(id:string){
    console.log(this.url+"/"+id)
    return this.http.delete(this.url+"/"+id)
  }
  updateOne(id: string, currentUser: User) {
    return this.http.put<User>(this.url+"/"+id,currentUser)
  }
}
