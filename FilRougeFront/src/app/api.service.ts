import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iaffaire } from './iaffaire';

@Injectable()
export class ApiService {

  URL: string = 'http://192.168.1.109:8080/api';
  //URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAffaires(): Observable<Iaffaire[]> {
    return this.http.get(`${this.URL}/affaires`) as Observable<Iaffaire[]>;
  }

}
