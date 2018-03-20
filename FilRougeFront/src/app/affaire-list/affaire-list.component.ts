import { Component, OnInit } from '@angular/core';
import { Iaffaire } from '../iaffaire';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { AffaireService } from '../affaire.service';
import { AjouterArmeAaffaireComponent } from '../ajouter-arme-aaffaire/ajouter-arme-aaffaire.component';
import { ArmesService } from '../armes.service';

@Component({
  selector: 'app-affaire-list',
  templateUrl: './affaire-list.component.html',
  styleUrls: ['./affaire-list.component.css']
})
export class AffaireListComponent implements OnInit {
  aff: Iaffaire;
  selectedRowIndex: number =-1;
  edition:boolean=false;

  constructor(private affaireService: AffaireService,private armeService: ArmesService, public dialog: MatDialog) {}

  displayedColumns = ['nom_affaire', 'date_creation', 'date_cloture'];
  dataSourceAffaire = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceAffaire.filter = filterValue;
  }

  ngOnInit() {
    this.aff = {
      id_affaire:null,
      nom_affaire:'',
      date_creation:null,
      vehicule:[],
      arme:[],
      suspect:[],
      infos_affaire:'',
      classee:false
    }


    this.refreshTab();

    this.affaireService.update$.subscribe(()=>this.refreshTab());
    
  }

  refreshTab(){
    this.affaireService.getAffaires().subscribe((data: Iaffaire[]) => {
      this.dataSourceAffaire=new MatTableDataSource(data);
    });
  }


  highlight(row){
    this.selectedRowIndex = row.id_affaire;
    console.log(row.id_affaire);
    this.aff=row;
    this.edition=true;
  }

  cancelSelect(){
    this.selectedRowIndex=-1;
    this.edition=false;
    this.clearInput();
  }

  onSubmit(){
    if(this.edition){
      this.affaireService.updateAffaire(this.aff).subscribe();
    } else {
      this.affaireService.createAffaire(this.aff).subscribe();
    }
  }

  deleteAffaire(){
    this.edition=false;
    this.affaireService.deleteAffaires(this.aff.id_affaire).subscribe();
    this.clearInput();
  }

  clearInput(){
    this.aff = {
      nom_affaire:'',
      date_creation:null,
      vehicule:[],
      arme:[],
      suspect:[],
      infos_affaire:'',
      classee:false
    }
  }


  ajouterArmeAAffaire(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    this.dialog.open(AjouterArmeAaffaireComponent,{data : {armes:this.armeService.getArmes().subscribe()}})
    console.log()
  }
}
