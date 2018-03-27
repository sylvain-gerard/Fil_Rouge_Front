import { Iaffaire } from './iaffaire';

export interface Iarme {
  id?: number;
  type: string;
  marque: string;
  modele: string;
  affaire: Iaffaire[];
  infos_complementaire: string;
 // photo: string;
  calibre: string;
  numero_serie: string;
}
