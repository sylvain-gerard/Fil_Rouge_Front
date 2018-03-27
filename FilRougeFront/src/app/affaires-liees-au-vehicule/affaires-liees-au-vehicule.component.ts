import { Component, OnInit, Inject } from '@angular/core';
import { Ivehicule } from '../ivehicule';
import { Iaffaire } from '../iaffaire';
import { AffaireService } from '../affaire.service';
import { VehiculeService } from '../vehicule.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-affaires-liees-au-vehicule',
  templateUrl: './affaires-liees-au-vehicule.component.html',
  styleUrls: ['./affaires-liees-au-vehicule.component.css']
})
export class AffairesLieesAuVehiculeComponent implements OnInit {
  vehicule: Ivehicule;
  affaires: Iaffaire[];

    constructor(
    private affaireService: AffaireService,
    private vehiculeService: VehiculeService,
    public dialogRef: MatDialogRef<AffairesLieesAuVehiculeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.vehicule = {
      id: null,
      type: '',
      marque: '',
      modele: '',
      immatriculation: '',
      couleur_vehicule: '',
      photo: '',
      infos_complementaire: '',
      affaire: []
    };
    this.affaires = [];
    this.vehiculeService.getOneVehicule(this.data).subscribe(vehicule => this.vehicule = vehicule);
    this.refreshList();
  }

  refreshList() {
    this.affaireService.getAffairesVehicule(this.data).subscribe(affaires => this.affaires = affaires);
  }

  closeDial() {
    this.dialogRef.close();
  }

  test() {
    if (this.affaires.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
