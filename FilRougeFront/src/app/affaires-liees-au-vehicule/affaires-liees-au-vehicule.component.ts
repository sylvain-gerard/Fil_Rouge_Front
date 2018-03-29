import { Component, OnInit, Inject } from '@angular/core';
import { Ivehicule } from '../ivehicule';
import { Iaffaire } from '../iaffaire';
import { AffaireService } from '../affaire.service';
import { VehiculeService } from '../vehicule.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Iobjetsaffaire } from '../iobjetsaffaire';

@Component({
  selector: 'app-affaires-liees-au-vehicule',
  templateUrl: './affaires-liees-au-vehicule.component.html',
  styleUrls: ['./affaires-liees-au-vehicule.component.css']
})

export class AffairesLieesAuVehiculeComponent implements OnInit {
  vehicule: Ivehicule;
  vehicules: Ivehicule[];
  affaire: Iaffaire[];
  affaires: Iaffaire[];
  aff: Iaffaire;
  selectedRowIndex = -1;
  edition = false;
  selectedAffaire: boolean;

    constructor(
    private affaireService: AffaireService,
    private vehiculeService: VehiculeService,
    public dialogRef: MatDialogRef<AffairesLieesAuVehiculeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    displayedColumns = ['nom_affaire', 'date_creation', 'date_cloture'];
    dataSourceAffaire = new MatTableDataSource();

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
    this.affaireService.getAffairesVehicule(this.data).subscribe(
      affaires => {
        this.affaires = affaires;
        this.dataSourceAffaire = new MatTableDataSource(this.affaires);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceAffaire.filter = filterValue;
  }

  highlight(row) {
    this.selectedRowIndex = row.id_affaire;
    this.aff = Object.assign({}, row);
    this.edition = true;
    this.selectedAffaire = true;
  }

  closeDial() {
    this.dialogRef.close();
  }

  delierDuVehicule(idAffaire) {
    this.selectedAffaire = false;
    this.selectedRowIndex = -1;
    const idAffaireEtVehicule: Iobjetsaffaire = {
      idAffaire: idAffaire,
      idObjet: this.vehicule.id
    };
    this.vehiculeService.supprVehiculeAffaire(idAffaireEtVehicule).subscribe(succes => this.refreshList());
  }

  test() {
    if (this.affaires.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
