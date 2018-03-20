import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iaffaire } from './iaffaire';
import {map} from 'rxjs/operators';
import { Iarme } from './iarme';

@Injectable()
export class ApiService {

  URL: string = 'http://192.168.1.109:8080/api';
  //URL: string = 'http://localhost:8080';


  constructor(private http: HttpClient) {}

  getAffaires() {
    return this.http.get<Iaffaire[]>(`${this.URL}/affaires`)
  }

  updateAffaire(id, affaire: Iaffaire){
    return this.http.put<Iaffaire>(`${this.URL}/affaire/${id}`, affaire)
  }

  createAffaire(affaire:Iaffaire){
    if (affaire.id_affaire==null){
      return this.http.post<Iaffaire>(`${this.URL}/affaires`, affaire)    
  }
  }

  deleteAffaire(id){
    return this.http.delete<any>(`${this.URL}/affaire/${id}`)
  }

  getArmes(){
    return this.http.get<Iarme[]>(`${this.URL}/armes`)
  }
}
