import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { Ivehicule } from './ivehicule';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class VehiculeService {
  constructor(private api: ApiService) {}

  update$: Subject<any> = new Subject<any>();
  selectedVehicule: Ivehicule;

  getVehicules(): Observable<Ivehicule[]> {
    return this.api.getVehicules() as Observable<Ivehicule[]>;
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
