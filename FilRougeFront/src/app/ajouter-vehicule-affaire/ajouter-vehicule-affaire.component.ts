import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ivehicule } from '../ivehicule';
import { VehiculeService } from '../vehicule.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-ajouter-vehicule-affaire',
  templateUrl: './ajouter-vehicule-affaire.component.html',
  styleUrls: ['./ajouter-vehicule-affaire.component.css']
})
export class AjouterVehiculeAffaireComponent implements OnInit {

  vehicule:Ivehicule;
  vehicules:Ivehicule[];
  selectedVehicule: boolean = false;
  selectedRowIndex: number = -1;

  constructor(
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
    this.refreshTab();
  }

  refreshTab() {
    this.vehiculeService.getVehicules().subscribe((data: Ivehicule[]) => {
      this.dataSourceVehicules = new MatTableDataSource(data);
      this.dataSourceVehicules.sort=this.sort;
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.vehicule = Object.assign({}, row);
    this.selectedVehicule=true;
  }

  closeDial(){
    this.dialogRef.close();
  }

  addVehiculeToAffaire(){
    this.selectedVehicule=false;
  }

  rechercher(){

  }

}
