import { Component, OnInit, Inject } from '@angular/core';
import { Ivehicule } from '../ivehicule';
import { Iaffaire } from '../iaffaire';
import { AffaireService } from '../affaire.service';
import { VehiculeService } from '../vehicule.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vehicule-affaire',
  templateUrl: './vehicule-affaire.component.html',
  styleUrls: ['./vehicule-affaire.component.css']
})
export class VehiculeAffaireComponent implements OnInit {
  vehicules: Ivehicule[];
  affaire: Iaffaire;

  constructor(
    private affaireService: AffaireService,
    private vehiculeService: VehiculeService,
    public dialogRef: MatDialogRef<VehiculeAffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.affaire = {
      nom_affaire: '',
      date_creation: null,
      vehicule: [],
      arme: [],
      suspect: [],
      infos_affaire: '',
      classee: false
    };
    this.vehicules=[];
    this.affaireService.getOneAffaire(this.data).subscribe(affaire=>this.affaire = affaire);
    this.refreshList();
  }

  refreshList() {
    this.vehiculeService.getVehiculesAffaire(this.data).subscribe(vehicules=>this.vehicules=vehicules)
  }

  closeDial(){
    this.dialogRef.close();
  }

  test(){
    if (this.vehicules.length>0){
      return true
    }
    else{return false}
  }
}
