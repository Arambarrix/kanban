import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {
  private value:T|any;
  private path="http://localhost:8080/";
  private url :string | undefined;
  constructor(private http: HttpClient) {
  }
  public setUrl(url:string){
    this.url=url;
  }
  public getUrl():any{
    return this.url;
  }
  public getPath(){
    return this.path;
  }
  public setPath(){
    this.path+=this.url
  }
  public findAll <value>(): Observable<T[]> {
    return this.http.get<T[]>(this.path+"/");
  }
  public findOne <value>(id:string): Observable<value> {
    return this.http.get<value>(this.path+"/"+id);
  }
  public createOne<T> (t:any) {
    return this.http.post<T>(this.path+this.url+"/all",t);
  }
  public updateOne <T>(id:string,t:any){
    return this.http.put<T>(this.path+"/"+id,t);
  }
  public deleteOne(id:string) {
    console.log(this.path+"/"+id)
    return this.http.delete(this.path+"/"+id)
  }

}
