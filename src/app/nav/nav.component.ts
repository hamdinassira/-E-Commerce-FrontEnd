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

   categories;

  currentCategorie;


  constructor(private product: ProduitsService, private router: Router, private route: ActivatedRoute,
              public authService: AuthService) {

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

getProduitParNom(nom){

  this.product.produitsParNom(nom).subscribe((data)=>{
// this.products.name=data
this.router.navigate(["/produit/5/0"])
  })

}

logOut(){
  this.authService.removeTokenFromLocalStorage()
  // this.authService.isAuthenticated=false;
  // this.authService.userAuthenticated=undefined
}
login(){
  this.router.navigate(['/login'])
}
}
