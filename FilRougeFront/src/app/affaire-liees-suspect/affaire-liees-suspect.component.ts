import { Component, OnInit, Inject } from '@angular/core';
import { Isuspect } from '../isuspect';
import { SuspectService } from '../suspect.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { AffaireService } from '../affaire.service';
import { Iaffaire } from '../iaffaire';
import { Iobjetsaffaire } from '../iobjetsaffaire';

@Component({
  selector: 'app-affaire-liees-suspect',
  templateUrl: './affaire-liees-suspect.component.html',
  styleUrls: ['./affaire-liees-suspect.component.css']
})
export class AffaireLieesSuspectComponent implements OnInit {
  affaire: Iaffaire;
  affaires: Iaffaire[];
  suspect: Isuspect;
  suspects: Isuspect[];
  selectedRowIndex = -1;
  edition = false;
  selectedAffaire: boolean;

   constructor(
    private affaireService: AffaireService,
    private suspectService: SuspectService,
    public dialogRef: MatDialogRef<AffaireLieesSuspectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    displayedColumns = ['nom_affaire', 'date_creation', 'date_cloture'];
    dataSourceAffaire = new MatTableDataSource();


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
      matricule: '',
      affaire: []
    };
    this.affaires = [];
    this.suspectService.getOnesuspect(this.data).subscribe(suspect => this.suspect = suspect);
    this.refreshList();
  }

  refreshList() {
    this.suspectService.getSuspectAffaires(this.data).subscribe(
      affaires => {
        this.affaires = affaires;
        this.dataSourceAffaire = new MatTableDataSource(this.affaires);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceAffaire.filter = filterValue;
  }

  highlight(row) {
    this.selectedRowIndex = row.id_affaire;
    this.affaire = Object.assign({}, row);
    this.edition = true;
    this.selectedAffaire = true;
  }

  delierDeSuspect(idAffaire) {
    const idAffaireSuspect: Iobjetsaffaire = {
      idAffaire: idAffaire,
      idObjet: this.suspect.id
    };
    this.suspectService.supprSuspectAffaire(idAffaireSuspect).subscribe(succes => this.refreshList());
  }

  test() {
    if (this.affaires.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  closeDial() {
    this.dialogRef.close();
  }
}
