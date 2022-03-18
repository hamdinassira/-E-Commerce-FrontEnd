import { Router } from '@angular/router';
import { Categorie } from './../shared/module/categorie';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Produits } from '../shared/module/produits';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  produit:Produits=new Produits()
  categories

  constructor(private produitService: ProduitsService, private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.getCategory()
  }
  public getCategory(){
    this.produitService.getCategories().subscribe((data)=>{
      this.categories=data;
    },error=>{console.error(error);}
    )
  }

  ajouterProduit(){
    this.produitService.addProduct(this.produit).subscribe((data)=>{
      console.log(data)
      console.log("produit ajouter avec succee")
this.toastr.success('produit ajouter avec succee')
    })

  }



}
