import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource,
  MatSort
} from '@angular/material';
import { Iarme } from '../iarme';
import { ArmesService } from '../armes.service';
import { AffaireService } from '../affaire.service';
import { Iaffaire } from '../iaffaire';

@Component({
  selector: 'app-ajouter-arme-aaffaire',
  templateUrl: './ajouter-arme-aaffaire.component.html',
  styleUrls: ['./ajouter-arme-aaffaire.component.css']
})
export class AjouterArmeAaffaireComponent implements OnInit {
  arme: Iarme;
  armes: Iarme[];
  affaire: Iaffaire;
  selectedArme: boolean;
  selectedRowIndex: number = -1;

  constructor(
    private affaireService: AffaireService,
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

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceArmes.filter = filterValue;
  }

  ngOnInit() { 
    this.affaireService.getOneAffaire(this.data).subscribe(affaire=>this.affaire = affaire);
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.arme = Object.assign({}, row);
    this.selectedArme = true;
  }

  closeDial() {
    this.dialogRef.close();
  }

  addArmeToAffaire() {
    this.selectedArme = false;
    this.selectedRowIndex=-1;
    this.armeService.addArmeAffaire(this.affaire.id_affaire, this.arme.id);
  }

  rechercher(recherche) {
    this.armeService.searchArmes(recherche).subscribe((data: Iarme[]) => {
      this.dataSourceArmes = new MatTableDataSource(data);
      this.dataSourceArmes.sort = this.sort;
    });
  } 
}
