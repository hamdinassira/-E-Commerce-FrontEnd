

export class Produits {
 id: number;
 name: string;
 description: string;
 date: Date;
//  categorie: Categorie;
 price: string;
 reference: string;
 stock:boolean;
 selected: boolean;
 promotion: boolean;
 quantite: number;
 image:string;
 _links : {
  self : {
    href: string
  },
  product : {
    href : string
  },
  categorie : {
    href : string
  }}




}
