import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
  constructor(private http: HttpClient) { }

  public getListOfUsers(): Observable<any>{
    return this.http.get(this.url);
  }
}
