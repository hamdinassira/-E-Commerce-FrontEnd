import { Client } from './client';
import { LigneCart } from './ligne-cart';
export class Cart {
  constructor(name:string){this.nom=name;}
  id: number;
  nom: string;
  items:Map<number, LigneCart>=new Map()
  client:Client;
  _links : {
    self : {
      href: string
    },
    profile : {
      href : string
    }}

}
