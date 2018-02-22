import { Component, OnInit } from '@angular/core';
import { Iaffaire } from '../iaffaire';


@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent {

  affaire:Iaffaire;

}
