import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ivehicule } from '../ivehicule';
import { VehiculeService } from '../vehicule.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';
import { Iaffaire } from '../iaffaire';
import { AffaireService } from '../affaire.service';
import { Iobjetsaffaire } from '../iobjetsaffaire';

@Component({
  selector: 'app-ajouter-vehicule-affaire',
  templateUrl: './ajouter-vehicule-affaire.component.html',
  styleUrls: ['./ajouter-vehicule-affaire.component.css']
})
export class AjouterVehiculeAffaireComponent implements OnInit {

  vehicule:Ivehicule;
  vehicules:Ivehicule[];
  affaire: Iaffaire;
  selectedVehicule: boolean = false;
  selectedRowIndex: number = -1;

  constructor(
    private snackBar:MatSnackBar,
    private affaireService: AffaireService,
    private vehiculeService: VehiculeService,
    public dialogRef: MatDialogRef<AjouterVehiculeAffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'immatriculation_vehicule',
    'type_vehicule',
    'marque_vehicule',
    'modele_vehicule',
    'couleur_du_vehicule',
  ];

  dataSourceVehicules = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceVehicules.filter = filterValue;
  }

  ngOnInit() {
    this.affaireService.getOneAffaire(this.data).subscribe(affaire=>this.affaire = affaire);
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.vehicule = Object.assign({}, row);
    this.selectedVehicule=true;
  }

  closeDial(){
    this.dialogRef.close();
  }

  addVehiculeToAffaire() {
    this.selectedVehicule = false;
    this.selectedRowIndex=-1;
    let idAffaireEtVehicule: Iobjetsaffaire = {
      idAffaire: this.affaire.id_affaire,
      idObjet: this.vehicule.id
    };
    this.vehiculeService.addVehiculeAffaire(idAffaireEtVehicule).subscribe(
      result=> {this.afficherMessage("Enregistrement effectué", "")},
      error => {this.afficherMessage("", "Vehicule déjà présent dans l'affaire")}
    )
  }

  afficherMessage(message:string, erreur: string){
    this.snackBar.open(message,erreur, {
      duration: 2000,
    });
  }

  rechercher(recherche) {
    this.vehiculeService.searchVehicules(recherche).subscribe((data: Ivehicule[]) => {
      this.dataSourceVehicules = new MatTableDataSource(data);
      this.dataSourceVehicules.sort = this.sort;
    });
  } 

}
