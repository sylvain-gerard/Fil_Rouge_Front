import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { SuspectService } from '../suspect.service';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSort
} from '@angular/material';
import { Isuspect } from '../isuspect';

@Component({
  selector: 'app-ajouter-suspect-affaire',
  templateUrl: './ajouter-suspect-affaire.component.html',
  styleUrls: ['./ajouter-suspect-affaire.component.css']
})
export class AjouterSuspectAffaireComponent implements OnInit {
  suspect: Isuspect;
  suspects: Isuspect[];
  selectedSuspect: boolean = false;
  selectedRowIndex: number = -1;

  constructor(
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
    this.refreshTab();
  }

  refreshTab() {
    this.suspectService.getSuspects().subscribe((data: Isuspect[]) => {
      this.dataSourceSuspects = new MatTableDataSource(data);
      this.dataSourceSuspects.sort=this.sort;
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.suspect = Object.assign({}, row);
    this.selectedSuspect=true;
  }

  closeDial(){
    this.dialogRef.close();
  }

  addSuspectToAffaire(){
    this.selectedSuspect=false;
  }

  rechercher(){

  }
}
