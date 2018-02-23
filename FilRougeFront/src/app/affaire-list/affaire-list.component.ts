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
  selectedRowIndex: string ="";

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
      nom_affaire:'',
      date_creation:null,
      vehicule:[],
      arme:[],
      suspect:[],
      infos_affaire:'',
      classee:false
    }


    this.refreshTab();

    this.affaireService.created$.subscribe(()=>this.refreshTab());
    
  }

  refreshTab(){
    this.affaireService.getAffaires().subscribe((data: Iaffaire[]) => {
      this.affaires = data;
      console.log(this.affaires);
    });
  }
  highlight(row){
    // row={...row, date_creation:new Date(row.date_creation)};

    this.selectedRowIndex = row.nom_affaire;
    this.aff=row;
    console.log(row)
  }

  cancelSelect(){
    this.selectedRowIndex="";
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

  onSubmit(){
    this.affaireService.createAffaire(this.aff).subscribe();
  }
}
