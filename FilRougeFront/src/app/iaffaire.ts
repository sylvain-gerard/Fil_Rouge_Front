import { Ivehicule } from "./ivehicule";
import { Iarme } from "./iarme";
import { Isuspect } from "./isuspect";

export interface Iaffaire {

    id_affaire?:number;
    nom_affaire:string;
    date_creation:any;
    date_cloture?:any;
    vehicule:Ivehicule[];
    arme:Iarme[];
    suspect:Isuspect[];
    infos_affaire:string;
    classee:boolean;

}
