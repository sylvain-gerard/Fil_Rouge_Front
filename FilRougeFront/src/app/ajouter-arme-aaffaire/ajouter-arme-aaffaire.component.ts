import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource
} from '@angular/material';
import { Iarme } from '../iarme';
import { ArmesService } from '../armes.service';

@Component({
  selector: 'app-ajouter-arme-aaffaire',
  templateUrl: './ajouter-arme-aaffaire.component.html',
  styleUrls: ['./ajouter-arme-aaffaire.component.css']
})
export class AjouterArmeAaffaireComponent implements OnInit {
  arme: Iarme;
  armes: Iarme[];
  selectedArme:boolean=false;
  selectedRowIndex: number = -1;

  constructor(
    private armeService: ArmesService,
    public dialogRef: MatDialogRef<AjouterArmeAaffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  displayedColumns = [
    'type_arme',
    'marque_arme',
    'modele_arme',
    'numero_serie_arme'
  ];
  dataSourceArmes = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceArmes.filter = filterValue;
  }

  ngOnInit() {
    this.refreshTab();
  }

  refreshTab() {
    this.armeService.getArmes().subscribe((data: Iarme[]) => {
      this.dataSourceArmes = new MatTableDataSource(data);
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.arme = Object.assign({}, row);
    this.selectedArme=true;
  }

  closeDial(){
    this.dialogRef.close();
  }

  addArmeToAffaire(){
    this.selectedArme=false;
  }
}
