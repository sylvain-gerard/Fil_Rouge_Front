import { Component, OnInit, ViewChild } from '@angular/core';
import { Iarme } from '../iarme';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort
} from '@angular/material';
import { AffaireService } from '../affaire.service';
import { AjouterArmeAaffaireComponent } from '../ajouter-arme-aaffaire/ajouter-arme-aaffaire.component';
import { ArmesService } from '../armes.service';
import { SuspectAffaireComponent } from '../suspect-affaire/suspect-affaire.component';
import { ArmeAffaireComponent } from '../arme-affaire/arme-affaire.component';
import { AjouterSuspectAffaireComponent } from '../ajouter-suspect-affaire/ajouter-suspect-affaire.component';
import { AffairesLieesAarmeComponent } from '../affaires-liees-aarme/affaires-liees-aarme.component';

@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.css']
})
export class ArmeComponent implements OnInit {
  arme: Iarme;
  selectedRowIndex = -1;
  edition = false;

  constructor(
    private armesService: ArmesService,
    //private armeService: ArmesService,
    public dialog: MatDialog,
    public dialog2: MatDialog
  ) {}

  displayedColumns = [
    'type',
    'marque',
    'modele',
    'calibre',
    'numero_serie'
  ];
  dataSourceArme = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceArme.filter = filterValue;
  }

  ngOnInit() {
    this.arme = {
      id: null,
      type: '',
      marque: '',
      modele: '',
      numero_serie: '',
      calibre: '',
    //  photo: '',
      infos_complementaire: '',
      affaire: []
    };

    this.refreshTab();

    this.armesService.update$.subscribe(() => this.refreshTab());
  }

  refreshTab() {
    this.armesService
      .getArmes()
      .subscribe((data: Iarme[]) => {
        this.dataSourceArme = new MatTableDataSource(data);
        this.dataSourceArme.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.arme = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    if (this.edition) {
      this.armesService.updateArme(this.arme).subscribe();
    } else {
      this.armesService.createArme(this.arme).subscribe();
    }
  }

  deleteArme() {
    this.edition = false;
    this.armesService.deleteArme(this.arme.id).subscribe();
    this.clearInput();
  }

  clearInput() {
    this.arme = {
      id: null,
      type: '',
      marque: '',
      modele: '',
      numero_serie: '',
      calibre: '',
     // photo: '',
      infos_complementaire: '',
      affaire: []
    };
  }

  
  affairesDeLArme() {
    this.dialog.open(AffairesLieesAarmeComponent, { width: '600px',
    data: this.arme.id
  });
  }
}
