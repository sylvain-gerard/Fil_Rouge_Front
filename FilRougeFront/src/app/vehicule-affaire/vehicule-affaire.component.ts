import { Component, OnInit, Inject } from '@angular/core';
import { Ivehicule } from '../ivehicule';
import { Iaffaire } from '../iaffaire';
import { AffaireService } from '../affaire.service';
import { VehiculeService } from '../vehicule.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Iobjetsaffaire } from '../iobjetsaffaire';

@Component({
  selector: 'app-vehicule-affaire',
  templateUrl: './vehicule-affaire.component.html',
  styleUrls: ['./vehicule-affaire.component.css']
})
export class VehiculeAffaireComponent implements OnInit {
  vehicules: Ivehicule[];
  vehicule: Ivehicule;
  affaire: Iaffaire;
  selectedRowIndex = -1;
  edition = false;
  selectedVehicule: boolean;

  constructor(
    private affaireService: AffaireService,
    private vehiculeService: VehiculeService,
    public dialogRef: MatDialogRef<VehiculeAffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = ['type', 'marque', 'modele', 'couleur_vehicule', 'immatriculation'];
  dataSourceVehicule = new MatTableDataSource();

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
    this.vehiculeService.getVehiculesAffaire(this.data).subscribe(
      vehicules => {
        this.vehicules = vehicules;
        this.dataSourceVehicule = new MatTableDataSource(this.vehicules);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceVehicule.filter = filterValue;
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.vehicule = Object.assign({}, row);
    this.edition = true;
    this.selectedVehicule = true;
  }

  closeDial(){
    this.dialogRef.close();
  }

  delierDeLaffaire(idVehicule){
    let idAffaireEtVehicule: Iobjetsaffaire = {
      idAffaire: this.affaire.id_affaire,
      idObjet: idVehicule
    };
    this.vehiculeService.supprVehiculeAffaire(idAffaireEtVehicule).subscribe(succes=>this.refreshList());
  }

  test(){
    if (this.vehicules.length>0){
      return true
    }
    else{return false}
  }
}
