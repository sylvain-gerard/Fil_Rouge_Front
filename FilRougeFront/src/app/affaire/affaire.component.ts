import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { BddAffaire } from '../bddaffaire';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.css']
})
export class AffaireComponent {

  displayedColumns = ['nom', 'dateCreation', 'clos'];
  dataSourceAffaire = new MatTableDataSource(AFFAIRE_BDD);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceAffaire.filter = filterValue;
  }
  

}

const AFFAIRE_BDD: BddAffaire[] = [
  {nom:'Hydrogen', dateCreation: '01/01/2015', clos:false},
  {nom:'Helium', dateCreation: '01/01/2014', clos:false},
  {nom:'Lithium', dateCreation: '01/01/2015', clos:true},
  {nom:'Beryllium', dateCreation: '01/01/2014', clos:false},
  {nom:'Boron', dateCreation: '01/01/2014', clos:false},
  {nom:'Carbon', dateCreation: '01/01/2014', clos:true},
  {nom:'Nitrogen', dateCreation: '01/01/2014', clos:false},
  {nom:'Oxygen', dateCreation: '01/01/2014', clos:false},
  {nom:'Fluorine', dateCreation: '01/01/2014', clos:false},
];
