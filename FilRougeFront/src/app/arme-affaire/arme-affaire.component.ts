import { Component, OnInit, Inject } from '@angular/core';
import { Iarme } from '../iarme';
import { ArmesService } from '../armes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AffaireService } from '../affaire.service';
import { Iaffaire } from '../iaffaire';

@Component({
  selector: 'app-arme-affaire',
  templateUrl: './arme-affaire.component.html',
  styleUrls: ['./arme-affaire.component.css']
})
export class ArmeAffaireComponent implements OnInit {
  armes: Iarme[];
  affaire:Iaffaire;

  constructor(
    private affaireService: AffaireService,
    private armeService: ArmesService,
    public dialogRef: MatDialogRef<ArmeAffaireComponent>,
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
    this.armes=[];
    this.affaireService.getOneAffaire(this.data).subscribe(affaire=>this.affaire = affaire);
    this.refreshList();
  }

  refreshList() {
    this.armeService.getAffaireArmes(this.data).subscribe(armes=>this.armes=armes)
  }

  closeDial(){
    this.dialogRef.close();
  }

  test(){
    if (this.armes.length>0){
      return true
    }
    else{return false}
  }
}
