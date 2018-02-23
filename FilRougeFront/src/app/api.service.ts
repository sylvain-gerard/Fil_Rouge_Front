import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iaffaire } from './iaffaire';
import {map} from 'rxjs/operators';

@Injectable()
export class ApiService {

  URL: string = 'http://192.168.1.109:8080/api';
  //URL: string = 'http://localhost:8080';


  constructor(private http: HttpClient) {}

  getAffaires() {
    return this.http.get<Iaffaire[]>(`${this.URL}/affaires`)
    // .pipe(
    //   map((affaires:Iaffaire[]) => {
    //     return affaires.map((affaire : Iaffaire) => {
    //       this.transformeToDate(affaire);
    //       return affaire;
    //     })
    //   })
    // );
  }

  updateAffaire(affaire: Iaffaire){
    
    
  }

  createAffaire(affaire:Iaffaire){
    if (affaire.id_affaire==null){
      return this.http.post<Iaffaire>(`${this.URL}/affaires`, affaire)    
  }

//   transformeToDate(affaire: Iaffaire){
//       affaire.date_creation = new Date(affaire.date_creation);
//       if (affaire.date_cloture){
//         affaire.date_cloture = new Date(affaire.date_cloture);
//       }
//       return affaire;
//   }

//   transformeToTimestamp(affaire: Iaffaire){
//     affaire.date_creation = affaire.date_creation.getTime();
//     if (affaire.date_cloture!=0){
//       affaire.date_cloture = affaire.date_cloture.getTime();
//     }
//     return affaire;
// }

}
