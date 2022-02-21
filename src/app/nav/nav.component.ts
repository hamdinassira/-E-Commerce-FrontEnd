import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

   categories;

  id;


  constructor(private product: ProduitsService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
this.id=this.route.snapshot.params.id;
 console.log(this.id)
    this.getCategory();
    this.getCategryById(this.id)
  }


  public getCategory(){
    this.product.getCategories().subscribe((data)=>{
      this.categories=data;
    },error=>{console.error(error);}
    )
  }

  public getCategryById(id){
    this.product.getCategoriesById(id).subscribe(data=>{
      console.log(data)
      this.categories=data
      // console.log(this.categories.id)
        this.router.navigate(['produit/2/'+id])

    })
  }



}
