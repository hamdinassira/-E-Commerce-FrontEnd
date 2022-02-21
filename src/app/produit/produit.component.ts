import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  products: any;

  id;
  constructor(private produit: ProduitsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.router.events.subscribe(val=> {
      // if(val instanceof NavigationEnd){
      //   let url=val.url
      //   console.log(url)
        let p1=this.route.snapshot.params.p1;
if(p1==1){
  this.getProduit();
}
else if(p1==2)
{
  let idCard=this.route.snapshot.params.p2;
  this.produit.getCategoriesById(idCard)
  //this.getProductByCat(idCard);

  }
      // }
    // })

  }
  getProductByCat(id) {
    this.produit.getCategoriesById(id).subscribe(data=>{
      this.router.navigateByUrl('/produit/2/'+id)
    })
    throw new Error('Method not implemented.');
  }
  getProduit() {
   this.produit.getProducts().subscribe(data=>{
     this.products=data
   })
  }

}
