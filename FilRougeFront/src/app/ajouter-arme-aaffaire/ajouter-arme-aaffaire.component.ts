import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ajouter-arme-aaffaire',
  templateUrl: './ajouter-arme-aaffaire.component.html',
  styleUrls: ['./ajouter-arme-aaffaire.component.css']
})
export class AjouterArmeAaffaireComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterArmeAaffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit() {
    console.log(this.data)
  }

}
