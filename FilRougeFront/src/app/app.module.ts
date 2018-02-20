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
  MatDatepickerModule,
  MatListModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SuspectComponent } from './suspect/suspect.component';
import { AffaireComponent } from './affaire/affaire.component';
import { ArmeComponent } from './arme/arme.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidenavService } from './sidenav.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    MenuComponent,
    AccueilComponent,
    SuspectComponent,
    AffaireComponent,
    ArmeComponent,
    VehiculeComponent,
    AdminComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
