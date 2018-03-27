import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { Isuspect } from './isuspect';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Iobjetsaffaire } from './iobjetsaffaire';
import { Iaffaire } from './iaffaire';

@Injectable()
export class SuspectService {

  constructor(private api: ApiService) { }

  update$: Subject<any> = new Subject<any>();
  selectedSuspect: Isuspect;

  getSuspects(): Observable<Isuspect[]> {
    return this.api.getSuspects() as Observable<Isuspect[]>;
  }

  getSuspectsAffaire(id): Observable<Isuspect[]> {
    return this.api.getSuspectsAffaire(id) as Observable<Isuspect[]>;
  }

  getSuspectAffaires(id): Observable<Iaffaire[]> {
    return this.api.getSuspectAffaires(id) as Observable<Iaffaire[]>;
  }

  searchSuspects(recherche): Observable<Isuspect[]> {
    return this.api.searchSuspects(recherche) as Observable<Isuspect[]>;
  }

  addSuspectAffaire(idAffaireEtSuspect): Observable<Iobjetsaffaire> {
    return this.api.addSuspectAffaire(idAffaireEtSuspect) as Observable<Iobjetsaffaire>;
  }

  supprSuspectAffaire(idAffaireEtSuspect): Observable<Iobjetsaffaire> {
    return this.api.supprSuspectAffaire(idAffaireEtSuspect) as Observable<Iobjetsaffaire>;
  }

  getOnesuspect(id): Observable<Isuspect> {
    return this.api.getOneSuspect(id) as Observable<Isuspect>;
  }

  updateSuspect(suspect: Isuspect): Observable<Isuspect> {
    return this.api
      .updateSuspect(suspect.id, suspect)
      .pipe(tap(data => this.update$.next()));
  }

  createSuspect(suspect: Isuspect): Observable<Isuspect> {
    return this.api.createSuspect(suspect).pipe(tap(data => this.update$.next()));
  }

  deleteSuspect(id) {
    return this.api.deleteSuspect(id).pipe(tap(data => this.update$.next()));
  }
}
