import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Iaffaire } from './iaffaire';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

@Injectable()
export class AffaireService {

  constructor(private api:ApiService) { }

  created$:Subject<any>=new Subject<any>();
  
  selectedAffaire:Iaffaire;

  getAffaires(): Observable<Iaffaire[]> {
    return this.api.getAffaires() as Observable<Iaffaire[]>;
  }

  createAffaire(affaire : Iaffaire): Observable<Iaffaire>{
    return this.api.createAffaire(affaire).pipe(tap((data)=>this.created$.next())
    )
  }
  }
    
