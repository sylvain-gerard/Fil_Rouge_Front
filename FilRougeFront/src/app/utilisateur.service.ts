import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs/Subject';
import { Iutilisateur } from './iutilisateur';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class UtilisateurService {

  constructor(private api: ApiService) {}

  updateUser$: Subject<any> = new Subject<any>();

  selectedUser: Iutilisateur;

  getUsers(): Observable<Iutilisateur[]> {
    return this.api.getUsers() as Observable<Iutilisateur[]>;
  }

  updateUser(user:Iutilisateur): Observable<Iutilisateur>{
    return this.api.updateUser(user.id, user).pipe(tap(data => this.updateUser$.next()));
  }

  createUser(user:Iutilisateur): Observable<Iutilisateur> {
    return this.api
      .createUser(user)
      .pipe(tap(data => this.updateUser$.next()));
  }

  deleteUser(id){
    return this.api.deleteUser(id).pipe(tap(data=> this.updateUser$.next()))
  }
}
