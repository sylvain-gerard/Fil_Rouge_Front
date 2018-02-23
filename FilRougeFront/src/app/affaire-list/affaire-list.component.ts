import { Component, OnInit } from '@angular/core';
import { Iaffaire } from '../iaffaire';
import { MatTableDataSource } from '@angular/material';
import { AffaireService } from '../affaire.service';

@Component({
  selector: 'app-affaire-list',
  templateUrl: './affaire-list.component.html',
  styleUrls: ['./affaire-list.component.css']
})
export class AffaireListComponent implements OnInit {
  affaires: Iaffaire[];
  aff: Iaffaire;
  selectedRowIndex: number =-1;

  constructor(private affaireService: AffaireService) {}

  displayedColumns = ['nom_affaire', 'date_creation', 'date_cloture'];
  dataSourceAffaire = new MatTableDataSource(this.affaires);

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
      this.affaires = data;
      console.log(this.affaires);
    });
  }


  highlight(row){
    this.selectedRowIndex = row.id_affaire;
    console.log(row.id_affaire);
    this.aff=row;
  }

  cancelSelect(){
    this.selectedRowIndex=-1
    this.clearInput();
  }

  onSubmit(){
    this.affaireService.createAffaire(this.aff).subscribe();
  }

  deleteAffaire(){
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
}
