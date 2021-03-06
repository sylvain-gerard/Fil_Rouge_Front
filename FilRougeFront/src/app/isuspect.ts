import { Iaffaire } from './iaffaire';

export interface Isuspect {
  id: number;
  nom: string;
  prenom: string;
  adn: string;
  adresse: string;
  date_naissance: string;
  infos_suspect: string;
  poids: number;
  taille: number;
  sexe: string;
  signes_particuliers: string;
  matricule: string;
  affaire: Iaffaire[];
}
