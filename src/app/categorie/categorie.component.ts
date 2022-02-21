import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  products;
  categories
id;
  constructor(private product: ProduitsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params.id;
    this.product.getCategoriesById(this.id)
  }

}
