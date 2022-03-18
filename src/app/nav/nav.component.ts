import { Categorie } from './../shared/module/categorie';
import { Produits } from './../shared/module/produits';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProduitsService } from '../shared/services/produits.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  produit: Array<Produits> = [];
   categories:Categorie;

  currentCategorie;
   searchproductFiltered=this.produit

  constructor(private product: ProduitsService, private router: Router, private route: ActivatedRoute,
              public authService: AuthService, public cartService: CartService) {

  }

  ngOnInit(): void {
    this.authService.loadAuthenticationUserFromLocalStorage();

    this.getCategory();

  }


  public getCategory(){
    this.product.getCategories().subscribe((data)=>{
      this.categories=data;
    },error=>{console.error(error);}
    )
  }

  public getCategryById(id){
    this.product.getCategoriesById(id).subscribe(data=>{
      // console.log(data)
      //  this.currentCategorie=data
      // console.log(this.categories.id)
        this.router.navigate(['/produit/2/'+id])

    })
  }

produitOnPromo(){
  this.currentCategorie=undefined;
  this.router.navigate(["/produit/3/0"])

}

produitDispo(){
  this.currentCategorie=undefined;
  this.router.navigate(["/produit/4/0"])

}

// getProduitParNom(nom){

//   this.product.rechercherProduitsParNom(nom).subscribe((data)=>{

//     this.produit.name=JSON.stringify(data)

// this.router.navigate(["/produit/5/0"])
//   })

// }

onKey(event: KeyboardEvent) {
console.log(this.produit)

  const filterValue = (<HTMLInputElement>event.target).value;

  if (!filterValue) {
    this.searchproductFiltered = this.produit;
    console.log(this.searchproductFiltered)
    return;
  }

  this.searchproductFiltered = this.produit.filter(product => {
    return product.name.includes(filterValue);

  });console.log(this.searchproductFiltered)

}

logOut(){
  this.authService.removeTokenFromLocalStorage()
  // this.authService.isAuthenticated=false;
  // this.authService.userAuthenticated=undefined
}
login(){
  this.router.navigate(['/login'])
}

getSize(){
  this.cartService.getCurrentCart().items
}

AddCategory(c){

this.router.navigate[('/categorie')]


}

deleteCategorie(idCategorie){
  this.product.deleteCategorieById(idCategorie).subscribe((data)=>{
    console.log(data)
    this.getCategory()
    this.router.navigate([''])

  })

}
}
