import { Component, OnInit, Inject } from '@angular/core';
import { Iarme } from '../iarme';
import { ArmesService } from '../armes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-arme-affaire',
  templateUrl: './arme-affaire.component.html',
  styleUrls: ['./arme-affaire.component.css']
})
export class ArmeAffaireComponent implements OnInit {
  armes: Iarme[];

  constructor(
    private armeService: ArmesService,
    public dialogRef: MatDialogRef<ArmeAffaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.armeService.getArmes().subscribe(data =>this.armes = data);
  }

  closeDial(){
    this.dialogRef.close();
    console.log(this.armes)
  }
}
