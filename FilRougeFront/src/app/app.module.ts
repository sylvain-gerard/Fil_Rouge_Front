import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTableModule,
  MatNativeDateModule,
  MatListModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatSortModule,
  MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SuspectComponent } from './suspect/suspect.component';
import { ArmeComponent } from './arme/arme.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidenavService } from './sidenav.service';
import { AffaireListComponent } from './affaire-list/affaire-list.component';
import { ApiService } from './api.service';
import { AffaireService } from './affaire.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjouterArmeAaffaireComponent } from './ajouter-arme-aaffaire/ajouter-arme-aaffaire.component';
import { ArmesService } from './armes.service';
import { UtilisateurService } from './utilisateur.service';
import { SuspectService } from './suspect.service';
import { VehiculeService } from './vehicule.service';
import { AjouterSuspectAffaireComponent } from './ajouter-suspect-affaire/ajouter-suspect-affaire.component';
import { AjouterVehiculeAffaireComponent } from './ajouter-vehicule-affaire/ajouter-vehicule-affaire.component';
import { VehiculeAffaireComponent } from './vehicule-affaire/vehicule-affaire.component';
import { SuspectAffaireComponent } from './suspect-affaire/suspect-affaire.component';
import { ArmeAffaireComponent } from './arme-affaire/arme-affaire.component';
import { AffairesLieesAuVehiculeComponent } from './affaires-liees-au-vehicule/affaires-liees-au-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    MenuComponent,
    AccueilComponent,
    SuspectComponent,
    ArmeComponent,
    VehiculeComponent,
    AdminComponent,
    AffaireListComponent,
    AjouterArmeAaffaireComponent,
    AjouterSuspectAffaireComponent,
    AjouterVehiculeAffaireComponent,
    VehiculeAffaireComponent,
    SuspectAffaireComponent,
    ArmeAffaireComponent,
    AffairesLieesAuVehiculeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatNativeDateModule,
    MatListModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [
    SidenavService,
    ApiService,
    AffaireService,
    ArmesService,
    UtilisateurService,
    SuspectService,
    VehiculeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AjouterArmeAaffaireComponent,
    ArmeAffaireComponent,
    AjouterSuspectAffaireComponent,
    SuspectAffaireComponent,
    AjouterVehiculeAffaireComponent,
    VehiculeAffaireComponent,
    AffairesLieesAuVehiculeComponent
  ]
})
export class AppModule {}
