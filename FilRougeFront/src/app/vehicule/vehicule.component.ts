import { Component, OnInit, ViewChild } from '@angular/core';
import { Ivehicule } from '../ivehicule';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort
} from '@angular/material';
import { AffaireService } from '../affaire.service';
import { VehiculeService } from '../vehicule.service';
import { AjouterArmeAaffaireComponent } from '../ajouter-arme-aaffaire/ajouter-arme-aaffaire.component';
import { ArmesService } from '../armes.service';
import { Iarme } from '../iarme';
import { ArmeAffaireComponent } from '../arme-affaire/arme-affaire.component';
import { SuspectAffaireComponent } from '../suspect-affaire/suspect-affaire.component';
import { VehiculeAffaireComponent } from '../vehicule-affaire/vehicule-affaire.component';
import { AjouterSuspectAffaireComponent } from '../ajouter-suspect-affaire/ajouter-suspect-affaire.component';
import { AjouterVehiculeAffaireComponent } from '../ajouter-vehicule-affaire/ajouter-vehicule-affaire.component';
import { AffairesLieesAuVehiculeComponent } from '../affaires-liees-au-vehicule/affaires-liees-au-vehicule.component';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  vehi: Ivehicule;
  selectedRowIndex = -1;
  edition = false;

  constructor(
    private vehiculeService: VehiculeService,
    private armeService: ArmesService,
    public dialog: MatDialog,
    public dialog2: MatDialog
  ) {}

  displayedColumns = [
    'type',
    'marque',
    'modele',
    'couleur_vehicule',
    'immatriculation'
  ];
  dataSourceVehicule = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceVehicule.filter = filterValue;
  }

  ngOnInit() {
    this.vehi = {
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

    this.refreshTab();

    this.vehiculeService.update$.subscribe(() => this.refreshTab());
  }

  refreshTab() {
    this.vehiculeService
      .getVehicules()
      .subscribe((data: Ivehicule[]) => {
        this.dataSourceVehicule = new MatTableDataSource(data);
        this.dataSourceVehicule.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.vehi = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    if (this.edition) {
      this.vehiculeService.updateVehicule(this.vehi).subscribe();
    } else {
      this.vehiculeService.createVehicule(this.vehi).subscribe();
    }
  }

  deleteAffaire() {
    this.edition = false;
    this.vehiculeService.deleteVehicule(this.vehi.id).subscribe();
    this.clearInput();
  }

  clearInput() {
    this.vehi = {
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
  }

  affairesDuVehicule() {
    this.dialog.open(AffairesLieesAuVehiculeComponent, {
      width: '600px',
      data: this.vehi.id
    });
  }
}
