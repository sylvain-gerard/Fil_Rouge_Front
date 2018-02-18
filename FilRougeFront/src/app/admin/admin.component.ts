import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { BddAgent } from '../bddagent';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  displayedColumns = ['nom', 'prenom', 'matricule', 'password', 'habilitation'];
  dataSource = new MatTableDataSource(AGENT_BDD);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  habilitations = [
    {value: 'admin-0', viewValue: 'Admin'},
    {value: 'inspecteur-1', viewValue: 'Inspecteur'},
    {value: 'sergent-2', viewValue: 'Sergent'},
    {value: 'agent-3', viewValue: 'Agent'}
  ];

}

const AGENT_BDD: BddAgent[] = [
  {nom:'Hydrogen', prenom: 'H', matricule:123, password:'a', habilitation:'Agent'},
  {nom:'Helium', prenom: 'He', matricule:123, password:'a', habilitation:'Agent'},
  {nom:'Lithium', prenom: 'Li', matricule:123, password:'a', habilitation:'Sergent'},
  {nom:'Beryllium', prenom: 'Be', matricule:123, password:'a', habilitation:'Inspecteur'},
  {nom:'Boron', prenom: 'B', matricule:123, password:'a', habilitation:'Admin'},
  {nom:'Carbon', prenom: 'C', matricule:123, password:'a', habilitation:'Sergent'},
  {nom:'Nitrogen', prenom: 'N', matricule:123, password:'a', habilitation:'Admin'},
  {nom:'Oxygen', prenom: 'O', matricule:123, password:'a', habilitation:'Agent'},
  {nom:'Fluorine', prenom: 'F', matricule:123, password:'a', habilitation:'Inspecteur'},
  {nom: 'Neon', prenom: 'Ne', matricule:123, password:'a', habilitation:'Agent'},
  {nom: 'Sodium', prenom: 'Na', matricule:123, password:'a', habilitation:'Agent'},
  {nom: 'Magnesium', prenom: 'Mg', matricule:123, password:'a', habilitation:'Agent'},
  {nom: 'Aluminum', prenom: 'Al', matricule:123, password:'a', habilitation:'Sergent'},
  {nom: 'Silicon', prenom: 'Si', matricule:123, password:'a', habilitation:'Sergent'},
  {nom: 'Phosphorus', prenom: 'P', matricule:123, password:'a', habilitation:'Inspecteur'},
  {nom: 'Sulfur', prenom: 'S', matricule:123, password:'a', habilitation:'Agent'},
  {nom: 'Chlorine', prenom: 'Cl', matricule:123, password:'a', habilitation:'Sergent'},
  {nom: 'Argon', prenom: 'Ar', matricule:123, password:'a', habilitation:'Agent'},
  {nom: 'Potassium', prenom: 'K', matricule:123, password:'a', habilitation:'Agent'},
  {nom: 'Calcium', prenom: 'Ca', matricule:123, password:'a', habilitation:'Inspecteur'},
];