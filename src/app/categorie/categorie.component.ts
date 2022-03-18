import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Categorie } from '../shared/module/categorie';
import { Produits } from '../shared/module/produits';
import { AuthService } from '../shared/services/auth.service';
import { ProduitsService } from '../shared/services/produits.service';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  products:Produits;
  categorie:Categorie= new Categorie()
  categories:Categorie
  // {
    // "id": 0,
    // 'nom':" ",
    // "_links":{self:{''},
    // self:{" "},self:{''},
    //                   },

  // }
id;
  private _route: any = '';
  constructor(private produit: ProduitsService, private authService: AuthService,
              private router: Router, private toastr: ToastrService, private route: ActivatedRoute) {
                this._route = this.router.url
              }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params.id;
    this.route.url.subscribe(url =>{
      console.log(url)})
     this.getCategory()
    console.log("dddddddddd")

  }

  public getCategory(){
    this.produit.getCategories().subscribe((data)=>{
      this.categories=data;
    },error=>{console.error(error);}
    )
  }
  AjouterCategorie(){
    console.log("fffffffff")
    this.produit.addCategorie(this.categorie).subscribe((data)=>{
      console.log(data)

this.toastr.success("Catégorie ajoutée avec succééééé")

this.router.navigate(['/produit/1/0']).then(() => {
  window.location.reload();
});
this.getCategory()
this.categories=data
// this.router.navigate([""])
    },
    error => {
      console.log(error);
    });

  }
}
