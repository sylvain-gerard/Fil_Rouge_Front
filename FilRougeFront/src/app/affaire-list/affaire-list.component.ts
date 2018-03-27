import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Iaffaire } from '../iaffaire';
import {
  MatTableDataSource,
  MatDialog,
  MatDialogConfig,
  MatSort
} from '@angular/material';
import { AffaireService } from '../affaire.service';
import { AjouterArmeAaffaireComponent } from '../ajouter-arme-aaffaire/ajouter-arme-aaffaire.component';
import { ArmesService } from '../armes.service';
import { Iarme } from '../iarme';
import { ArmeAffaireComponent } from '../arme-affaire/arme-affaire.component';
import { SuspectAffaireComponent } from '../suspect-affaire/suspect-affaire.component';
import { VehiculeAffaireComponent } from '../vehicule-affaire/vehicule-affaire.component';
import { AjouterSuspectAffaireComponent } from '../ajouter-suspect-affaire/ajouter-suspect-affaire.component';
import { AjouterVehiculeAffaireComponent } from '../ajouter-vehicule-affaire/ajouter-vehicule-affaire.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-affaire-list',
  templateUrl: './affaire-list.component.html',
  styleUrls: ['./affaire-list.component.css']
})
export class AffaireListComponent implements OnInit, OnDestroy {
  aff: Iaffaire;
  armes: Iarme[];
  selectedRowIndex: number = -1;
  edition: boolean = false;
  getAffSubscription: Subscription;
  createAffSubscription: Subscription;
  updateAffSubscription: Subscription;
  deleteAffSubscription: Subscription;

  constructor(
    private affaireService: AffaireService,
    private armeService: ArmesService,
    public dialog: MatDialog,
    public dialog2: MatDialog
  ) {}

  displayedColumns = ['nom_affaire', 'date_creation', 'date_cloture'];
  dataSourceAffaire = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceAffaire.filter = filterValue;
  }

  ngOnInit() {
    this.aff = {
      id_affaire: null,
      nom_affaire: '',
      date_creation: null,
      vehicule: [],
      arme: [],
      suspect: [],
      infos_affaire: '',
      classee: false
    };

    this.refreshTab();

    this.affaireService.update$.subscribe(() => this.refreshTab());
  }

  ngOnDestroy() {
    // this.getAffSubscription.unsubscribe();
    // this.createAffSubscription.unsubscribe();
    // this.updateAffSubscription.unsubscribe();
    // this.deleteAffSubscription.unsubscribe();
  }

  refreshTab() {
    this.affaireService
      .getAffaires()
      .subscribe((data: Iaffaire[]) => {
        this.dataSourceAffaire = new MatTableDataSource(data);
        this.dataSourceAffaire.sort = this.sort;
      });
  }

  highlight(row) {
    this.selectedRowIndex = row.id_affaire;
    this.aff = Object.assign({}, row);
    this.edition = true;
  }

  cancelSelect() {
    this.selectedRowIndex = -1;
    this.edition = false;
    this.clearInput();
  }

  onSubmit() {
    if (
      this.aff.date_cloture < this.aff.date_creation &&
      this.aff.date_cloture != ''
    ) {
      console.log('ERROR Date Creation');
      console.log(this.aff.date_cloture);
      return;
    }
    if (this.edition) {
      this.affaireService
        .updateAffaire(this.aff)
        .subscribe();
    } else {
      this.affaireService
        .createAffaire(this.aff)
        .subscribe();
    }
  }

  deleteAffaire() {
    this.edition = false;
    this.affaireService
      .deleteAffaires(this.aff.id_affaire)
      .subscribe();
    this.clearInput();
  }

  clearInput() {
    this.aff = {
      nom_affaire: '',
      date_creation: null,
      vehicule: [],
      arme: [],
      suspect: [],
      infos_affaire: '',
      classee: false
    };
  }

  ajouterArmeAAffaire() {
    this.dialog.open(AjouterArmeAaffaireComponent, {
      width: '600px',
      data: this.aff.id_affaire
    });
  }

  armeDelAffaire() {
    this.dialog.open(ArmeAffaireComponent, {
      width: '600px',
      data: this.aff.id_affaire
    });
  }

  ajoutSuspectsAffaire() {
    this.dialog.open(AjouterSuspectAffaireComponent, {
      width: '600px',
      data: this.aff.id_affaire
    });
  }

  supectDelAffaire() {
    this.dialog.open(SuspectAffaireComponent, {
      width: '600px',
      data: this.aff.id_affaire
    });
  }

  ajouterVehiculesAffaire() {
    this.dialog.open(AjouterVehiculeAffaireComponent, {
      width: '600px',
      data: this.aff.id_affaire
    });
  }

  vehiculeDelAffaire() {
    this.dialog.open(VehiculeAffaireComponent, {
      width: '600px',
      data: this.aff.id_affaire
    });
  }
}
