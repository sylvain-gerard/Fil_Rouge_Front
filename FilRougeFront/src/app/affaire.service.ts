import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Iaffaire } from './iaffaire';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AffaireService {

  constructor(private api:ApiService) { }
  
  selectedAffaire:Iaffaire;

  getAffaires(): Observable<Iaffaire[]> {
    return this.api.getAffaires() as Observable<Iaffaire[]>;
  }
    
}
