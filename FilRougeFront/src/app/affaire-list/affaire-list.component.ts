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

  constructor(private affaireService: AffaireService) {}

  displayedColumns = ['nom_affaire', 'date_creation', 'date_cloture'];
  dataSourceAffaire = new MatTableDataSource(this.affaires);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceAffaire.filter = filterValue;
  }

  ngOnInit() {
    this.affaireService.getAffaires().subscribe((data: Iaffaire[]) => {
      this.affaires = data;
      console.log(this.affaires);
    });
    
  }
}
