import { Bouquet } from "./bouquet";
import { Fleure } from "./fleure";
import { Client } from "./client";
export class Commande {
    num_com:any; 
    bouquets: Bouquet[] =[];
    fleures: Fleure[] =[];
    clients: Client[]=[];
    etat_c?:boolean | undefined;
    num_client?:any;
}