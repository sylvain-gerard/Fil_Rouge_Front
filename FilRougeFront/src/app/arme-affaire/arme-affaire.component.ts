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
    console.log(this.data);
    
    this.refreshList();
  }

  refreshList() {
    this.armeService.getAffaireArmes(this.data).subscribe(armes=>this.armes=armes)
  }

  closeDial(){
    this.dialogRef.close();
    console.log(this.armes)
  }

  test(){
    if (this.armes.length>0){
      return true
    }
    else{return false}
  }
}
