import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { BddAgent } from '../bddagent';
import { Iutilisateur } from '../iutilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  users:Iutilisateur[];
  user:Iutilisateur;
  selectedRowIndex: number= -1;
  edition:boolean=false;
 
  constructor(private utilisateurService:UtilisateurService){}

  displayedColumns = ['nom', 'prenom', 'matricule', 'password', 'habilitation'];
  dataSourceUser = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceUser.filter = filterValue;
  }

  habilitations = [
    {value: 'ADMIN', viewValue: 'Admin'},
    {value: 'INSPECTEUR', viewValue: 'Inspecteur'},
    {value: 'SERGENT', viewValue: 'Sergent'},
    {value: 'AGENT', viewValue: 'Agent'}
  ];

  ngOnInit(){
    this.clearInput();

    this.refreshTab();

    this.utilisateurService.updateUser$.subscribe(()=>this.refreshTab());
  }

  refreshTab(){
    this.utilisateurService.getUsers().subscribe((data: Iutilisateur[])=>{
      this.dataSourceUser=new MatTableDataSource(data);
    })
  }

  highlight(row){
    this.selectedRowIndex = row.id;
    console.log(row.id);
    this.edition=true;
    this.user=Object.assign({},row);
  }

  onSubmit(){
    if(this.edition){
      this.utilisateurService.updateUser(this.user).subscribe();
    } else {
      this.utilisateurService.createUser(this.user).subscribe();
    }
  }

  cancelSelect(){
    this.selectedRowIndex=-1;
    this.edition=false;
    this.clearInput();
  }

  clearInput(){
    this.user={
      id:0,
      nom:'',
      prenom:'',
      matricule:'',
      password:'',
      habilitation:''
    }
  }

  deleteAgent(){
    this.edition=false;
    this.utilisateurService.deleteUser(this.user.id).subscribe();
    this.clearInput();
  }
}