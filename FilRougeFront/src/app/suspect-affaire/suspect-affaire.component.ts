import { Component, OnInit, Inject } from '@angular/core';
import { Isuspect } from '../isuspect';
import { SuspectService } from '../suspect.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AffaireService } from '../affaire.service';
import { Iaffaire } from '../iaffaire';

@Component({
  selector: 'app-suspect-affaire',
  templateUrl: './suspect-affaire.component.html',
  styleUrls: ['./suspect-affaire.component.css']
})
export class SuspectAffaireComponent implements OnInit {
  suspects: Isuspect[];
  affaire:Iaffaire;

  constructor(
    private affaireService: AffaireService,
    private suspectService: SuspectService,
    public dialogRef: MatDialogRef<SuspectAffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.affaire = {
      nom_affaire: '',
      date_creation: null,
      vehicule: [],
      arme: [],
      suspect: [],
      infos_affaire: '',
      classee: false
    };
    this.suspects=[];
    this.affaireService.getOneAffaire(this.data).subscribe(affaire=>this.affaire = affaire);
    this.refreshList();
  }

  refreshList() {
    this.suspectService.getSuspectsAffaire(this.data).subscribe(suspects=>this.suspects=suspects);
  }

  closeDial(){
    this.dialogRef.close();
  }

  test(){
    if (this.suspects.length>0){
      return true
    }
    else{return false}
  }
}
