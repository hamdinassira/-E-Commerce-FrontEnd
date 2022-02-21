import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categories;
  constructor(private product: ProduitsService) { }

  ngOnInit(): void {
    this.getCategory();
  }


  public getCategory(){
    this.product.getCategories().subscribe((data)=>{
      this.categories=data;
    },error=>{console.error(error);}
    )
  }


}
