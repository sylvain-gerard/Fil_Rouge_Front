import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Iarme } from './iarme';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArmesService {

  constructor(private api:ApiService) { }
  selectedArmes: Iarme;

  getArmes(): Observable<Iarme[]> {
    return this.api.getArmes() as Observable<Iarme[]>;
  }
}
