import { Produits } from './../shared/module/produits';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/services/cart.service';
import { ProduitsService } from '../shared/services/produits.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  produits:Produits

  constructor(public cartService: CartService, private produit: ProduitsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params.id
    console.log(id)
    this.produit.getProductById(id).subscribe((data)=>{
      console.log(data)
      this.produits=data

    })

  }

}
