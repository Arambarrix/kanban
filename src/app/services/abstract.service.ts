import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {
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
  public findAll (): Observable<T[]> {
    return this.http.get<T[]>(this.path+"/");
  }
  public findOne <T>(id:string): Observable<T> {
    return this.http.get<T>(this.path+"/"+id);
  }
  public createOne(t:any) {
    return this.http.post(this.path,t);
  }
  public updateOne(id:string,t:any){
    return this.http.put(this.path+"/"+id,t);
  }
  public deleteOne(id:string) {
    return this.http.delete(this.path+"/"+id)
  }

}
