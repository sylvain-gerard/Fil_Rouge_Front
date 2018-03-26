import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Iarme } from './iarme';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

@Injectable()
export class ArmesService {
  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();
  selectedArmes: Iarme;

  getArmes(): Observable<Iarme[]> {
    return this.api.getArmes() as Observable<Iarme[]>;
  }

  getAffaireArmes(id): Observable<Iarme[]>{
    return this.api.getArmesAffaire(id) as Observable<Iarme[]>;
  }

  searchArmes(recherche): Observable<Iarme[]>{
    return this.api.searchArmes(recherche) as Observable<Iarme[]>;
  }

  addArmeAffaire(id_affaire, id_arme) : Observable<any>{
    return this.api.addArmeAffaire(id_affaire, id_arme) as Observable<any>;
  }

  updateArme(arme: Iarme): Observable<Iarme> {
    return this.api
      .updateArme(arme.id, arme)
      .pipe(tap(data => this.update$.next()));
  }

  createArme(arme: Iarme): Observable<Iarme> {
    return this.api.createArme(arme).pipe(tap(data => this.update$.next()));
  }

  deleteArme(id) {
    return this.api.deleteArme(id).pipe(tap(data => this.update$.next()));
  }
}
