import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { SuspectComponent } from './suspect/suspect.component';
import { AffaireComponent } from './affaire/affaire.component';
import { ArmeComponent } from './arme/arme.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'affaire', component: AffaireComponent },
  { path: 'suspect', component: SuspectComponent },
  { path: 'arme', component: ArmeComponent },
  { path: 'vehicule', component: VehiculeComponent },
  { path: 'supervision', component: AdminComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: AccueilComponent}
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
