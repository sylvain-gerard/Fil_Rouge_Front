import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SuspectService } from '../suspect.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSort,
  MatSnackBar
} from '@angular/material';
import { Isuspect } from '../isuspect';
import { Iobjetsaffaire } from '../iobjetsaffaire';
import { Iaffaire } from '../iaffaire';
import { AffaireService } from '../affaire.service';

@Component({
  selector: 'app-ajouter-suspect-affaire',
  templateUrl: './ajouter-suspect-affaire.component.html',
  styleUrls: ['./ajouter-suspect-affaire.component.css']
})
export class AjouterSuspectAffaireComponent implements OnInit {
  suspect: Isuspect;
  suspects: Isuspect[];
  affaire:Iaffaire;
  selectedSuspect: boolean = false;
  selectedRowIndex: number = -1;

  constructor(
    private snackBar:MatSnackBar,
    private affaireService: AffaireService,
    private suspectService: SuspectService,
    public dialogRef: MatDialogRef<AjouterSuspectAffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'matricule_suspect',
    'nom_suspect',
    'prenom_suspect',
    'sexe_suspect',
    'date_naissance_suspect',
  ];
  dataSourceSuspects = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceSuspects.filter = filterValue;
  }

  ngOnInit() {
    this.affaireService.getOneAffaire(this.data).subscribe(affaire=>this.affaire = affaire);
  }


  highlight(row) {
    this.selectedRowIndex = row.id;
    this.suspect = Object.assign({}, row);
    this.selectedSuspect=true;
  }

  closeDial(){
    this.dialogRef.close();
  }

  addSuspectToAffaire() {
    this.selectedSuspect = false;
    this.selectedRowIndex=-1;
    let idAffaireEtSuspect: Iobjetsaffaire = {
      idAffaire: this.affaire.id_affaire,
      idObjet: this.suspect.id
    };
    this.suspectService.addSuspectAffaire(idAffaireEtSuspect).subscribe(
      result=> {this.afficherMessage("Enregistrement effectué", "")},
      error => {this.afficherMessage("", "Suspect déjà présent dans l'affaire")}
    )
  }

  afficherMessage(message:string, erreur: string){
    this.snackBar.open(message,erreur, {
      duration: 2000,
    });
  }

  rechercher(recherche) {
    this.suspectService.searchSuspects(recherche).subscribe((data: Isuspect[]) => {
      this.dataSourceSuspects = new MatTableDataSource(data);
      this.dataSourceSuspects.sort = this.sort;
    });
  } 
}
