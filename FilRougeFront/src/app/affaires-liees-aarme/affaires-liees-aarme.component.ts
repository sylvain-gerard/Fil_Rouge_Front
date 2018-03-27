import { Component, OnInit, Inject } from '@angular/core';
import { Iarme } from '../iarme';
import { ArmesService } from '../armes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AffaireService } from '../affaire.service';
import { Iaffaire } from '../iaffaire';
import { Iobjetsaffaire } from '../iobjetsaffaire';

@Component({
  selector: 'app-affaires-liees-aarme',
  templateUrl: './affaires-liees-aarme.component.html',
  styleUrls: ['./affaires-liees-aarme.component.css']
})
export class AffairesLieesAarmeComponent implements OnInit {
  armes: Iarme[];
  arme: Iarme;
  affaire:Iaffaire;
  affaires: Iaffaire[];

  constructor(
    private affaireService: AffaireService,
    private armeService: ArmesService,
    public dialogRef: MatDialogRef<AffairesLieesAarmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.arme = {
      type:'',
      marque:'',
      modele:'',
      numero_serie:'',
      calibre:'',
      infos_complementaire:'',
      affaire:[]
    };
    this.affaires=[];
    this.armeService.getOneArme(this.data).subscribe(arme=>this.arme = arme);
    this.refreshList();
  }
  refreshList() {
    this.armeService.getArmeAffaires(this.data).subscribe(affaires=>this.affaires=affaires)
    console.log(this.affaires);
    
  }

  closeDial(){
    this.dialogRef.close();
  }

  delierDeLaffaire(idAffaire){
    let idAffaireEtArme: Iobjetsaffaire = {
      idAffaire: idAffaire,
      idObjet: this.arme.id
    };
    this.armeService.supprArmeAffaire(idAffaireEtArme).subscribe(succes=>this.refreshList());
  }

  test(){
    if (this.affaires.length>0){
      return true
    }
    else{return false}
  }

}
