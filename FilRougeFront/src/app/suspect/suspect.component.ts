import { Component, OnInit, ViewChild } from '@angular/core';
import {Isuspect } from '../isuspect';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort
} from '@angular/material';
import { AffaireService } from '../affaire.service';
import { SuspectService } from '../suspect.service';


@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})
export class SuspectComponent implements OnInit {
  suspect: Isuspect;
  selectedRowIndex: number = -1;
  edition: boolean = false;

  constructor(
  private suspectService: SuspectService,
  private affaireService: AffaireService,
  public dialog: MatDialog, public dialog2: MatDialog
  ) {}

  displayedColumns = ['nom', 'prenom', 'date_naissance', 'adresse', 'taille', 'poids', 'sexe', 'matricule'];
  dataSourceSuspect = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceSuspect.filter = filterValue;
  }

  ngOnInit() {
    this.suspect = {
      id: null,
      nom: '',
      prenom: '',
      adn: '',
      adresse: '',
      date_naissance: '',

      infos_suspect: '',
      poids: null,
      taille : null,
      sexe: '',
      signes_particuliers: '',
      matricule: ''
    };
    this.refreshTab();
    this.suspectService.update$.subscribe(() => this.refreshTab());
  }

  async refreshTab() {
    const toto = await this.suspectService.getSuspects().subscribe((data: Isuspect[]) => {
      this.dataSourceSuspect = new MatTableDataSource(data);
      this.dataSourceSuspect.sort = this.sort;
    });
    console.log('1 ! + ' + toto);
    console.log('avant ?');
  }

  highlight(row) {
    this.selectedRowIndex = row.id_affaire;
    this.suspect = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  clearInput() {
    this.suspect = {
      id: null,
      nom: '',
      prenom: '',
      adn: '',
      adresse: '',
      date_naissance: '',
      infos_suspect: '',
      poids: null,
      taille : null,
      sexe: '',
      signes_particuliers: '',
      matricule: ''
    };
  }

  onSubmit() {
    if (this.edition) {
      this.suspectService.updateSuspect(this.suspect).subscribe();
    } else {
      this.suspectService.createSuspect(this.suspect).subscribe();
    }
  }

  deleteSuspect() {
    this.edition = false;
    this.suspectService.deleteSuspect(this.suspect.id).subscribe();
    this.clearInput();
  }
}
