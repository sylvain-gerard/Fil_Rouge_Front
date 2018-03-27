import { Iaffaire } from './iaffaire';

export interface Ivehicule {

    id: number;
    type: string;
    marque: string;
    modele: string;
    affaire: Iaffaire[];
    infos_complementaire: string;
    photo: string;
    couleur_vehicule: string;
    immatriculation: string;


}
