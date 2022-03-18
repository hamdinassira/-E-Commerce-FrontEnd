import { HttpClient } from '@angular/common/http';
import { Cart } from './../module/cart';
import { LigneCart } from './../module/ligne-cart';
import { Injectable } from '@angular/core';

import { Produits } from './../module/produits';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  URL=environment.apiUrl;
  currentCart:string="Cart1"
   carts:Map<string, Cart>=new Map()

  constructor(private http:HttpClient) {
    // this.getAllCarts()

    let carts=localStorage.getItem("currenCart")
    console.log(carts);
//     if(carts!==null){
//  this.carts=carts
//       console.log(this.carts)



//     }
//     else{
      let cart=new Cart(this.currentCart)
    this.carts.set(this.currentCart, cart)
    // this.child.push(this.carts.get('currenCart'));
    // }
   }

getAllCarts(){
  return this.http.get(this.URL+ 'carts')
}

addToCart(produit: Produits){
  return this.http.post(this.URL+'carts',produit)
}

  public addToProduct(produit: Produits){
    let cart=this.carts.get(this.currentCart)
    let ligneCart:LigneCart=cart.items.get(produit.id)
    if(ligneCart){
      ligneCart.quantite+=produit.quantite

    }
    else{
      ligneCart=new LigneCart
      ligneCart.prix=produit.price
      ligneCart.quantite=produit.quantite
      ligneCart.produit=produit
      // localStorage.setItem("currenCart", this.currentCart)
      cart.items.set(produit.id,ligneCart)

      this.saveCaddy()

    }

  }

  getCurrentCart(){
  //   this.currentCart= JSON.parse(localStorage.getItem("currenCart"))
  // console.log(this.currentCart)
    let c =this.carts.get(this.currentCart)

   return c



  }

  getTotalForoCart():number{
    let total=0;
    let cart=this.carts[this.currentCart];
    let items:IterableIterator<LigneCart>= this.getCurrentCart().items.values()
    for(let pi of items ){
      total+=pi.prix*pi.quantite;
    }
    return total;

  }

  saveCaddy(){
    let cart=this.carts;
    console.log(cart)
   localStorage.setItem("currenCart", JSON.stringify(cart))
  //  localStorage.getItem("currentCart")

  }
  getSize(){
    // let caddy=this.carts[this.currentCart];
    // return Object.keys(caddy.items).length;
  }



  public removeProduct(id:number):void{
    let caddy=this.carts[this.currentCart];
   delete caddy.items[id];
   this.saveCaddy();
  }
}
