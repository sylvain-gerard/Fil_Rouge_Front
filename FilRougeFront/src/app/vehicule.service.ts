import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { Ivehicule } from './ivehicule';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Iobjetsaffaire } from './iobjetsaffaire';
import { Iaffaire } from './iaffaire';

@Injectable()
export class VehiculeService {
  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();
  selectedVehicule: Ivehicule;

  getVehicules(): Observable<Ivehicule[]> {
    return this.api.getVehicules() as Observable<Ivehicule[]>;
  }

  getOneVehicule(id): Observable<Ivehicule>{
    return this.api.getOneVehicule(id) as Observable<Ivehicule>;
  }

  getVehiculesAffaire(id): Observable<Ivehicule[]>{
    return this.api.getVehiculesAffaire(id) as Observable<Ivehicule[]>;
  }

  searchVehicules(recherche): Observable<Ivehicule[]>{
    return this.api.searchVehicules(recherche) as Observable<Ivehicule[]>;
  }

  addVehiculeAffaire(idAffaireEtVehicule) : Observable<Iobjetsaffaire>{
    return this.api.addVehiculeAffaire(idAffaireEtVehicule) as Observable<Iobjetsaffaire>;
  }

  supprVehiculeAffaire(idAffaireEtVehicule) :Observable<Iobjetsaffaire>{
    return this.api.supprSuspectAffaire(idAffaireEtVehicule) as Observable<Iobjetsaffaire>;
  }

  updateVehicule(vehicule: Ivehicule): Observable<Ivehicule> {
    return this.api
      .updateVehicule(vehicule.id, vehicule)
      .pipe(tap(data => this.update$.next()));
  }

  createVehicule(vehicule: Ivehicule): Observable<Ivehicule> {
    return this.api
      .createVehicule(vehicule)
      .pipe(tap(data => this.update$.next()));
  }

  deleteVehicule(id) {
    return this.api.deleteVehicule(id).pipe(tap(data => this.update$.next()));
  }
}
