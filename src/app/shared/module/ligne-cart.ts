import { Produits } from './produits';
export class LigneCart {
  id: number;
  prix: any;
  quantite:number;
  produit:Produits

  _links : {
    self : {
      href: string
    },
    profile : {
      href : string
    }}
}
