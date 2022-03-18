import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produits } from '../shared/module/produits';
import { AuthService } from '../shared/services/auth.service';
import { ProduitsService } from '../shared/services/produits.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  products: any ;
currentUrl;
  id;
  currentProduct: any;
  editPhoto: boolean;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  timestamp: number=0;


  constructor(private produit: ProduitsService, private route: ActivatedRoute, private router: Router,
                public authService: AuthService) {


   }

  ngOnInit(): void {
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
    // this.router.events.pipe(filter(val=> val instanceof NavigationEnd)).subscribe((val:NavigationEnd)=>{
        // this.currentUrl=val.url
        //  console.log(this.currentUrl)
        this.route.url.subscribe(url =>{
          console.log(url)
         let p1=this.route.snapshot.params.p1;
         if(p1==1){
           this.getProduit();
         }
else if(p1==2)
{
  let idCard=this.route.snapshot.params.p2;
  console.log(idCard)
  this.getProductByCat(idCard)

  }
  else if(p1==3)
{
  this.getProduitPromo()
  }
  else if(p1==4){

  this.getProduitStock()}

   else if(p1==5)
{
  let nom=this.route.snapshot.params.name
  this.getProduitParNom(nom)
  }
// }
    })

  let p1=this.route.snapshot.params.p1;
if(p1==1){
  this.getProduit();
}
else if(p1==2)
{
  let idCard=this.route.snapshot.params.p2;
  console.log(idCard)
  this.getProductByCat(idCard)
    }
  else if(p1==3)
{
  this.getProduitPromo()
   }
  else if(p1==4)
{
  this.getProduitStock()
  }
  else if(p1==5)
{
   let nom=this.route.snapshot.params.name
  this.getProduitParNom(nom)
  }
  }


  getProductByCat(id) {
    this.produit.getCategoriesById(id).subscribe(data=>{
      this.products=data
      console.log(data)
      this.router.navigate(['/produit/2/'+id])
    })

  }
  getProduit() {
   this.produit.getProducts().subscribe(data=>{
     this.products=data
     this.router.navigate(["/produit/1/0"])
   })
  }

  getProduitPromo() {
   this.produit.promotionProduits().subscribe(data=>{
     this.products=data
     this.router.navigate(["/produit/3/0"])
   })
  }

  getProduitStock() {
   this.produit.disponibleProduits().subscribe(data=>{
     this.products=data
     this.router.navigate(["/produit/4/0"])
   })
  }
getProduitParNom(nom){

//   this.produit.produitsParNom(nom).subscribe((data)=>{
// this.products.name=data
// this.router.navigate(["/produit/5/0"])
//   })

}

  onEditPhoto(p){

    this.currentProduct=p;
    this.editPhoto=true;
    console.log(this.editPhoto)
  }

  onSelectFile(event){
   this.selectedFiles=event.target.files;
  }

  uploadPhoto(){
    this.progress=0;
    this.currentFileUpload=this.selectedFiles.item(0);
    this.authService.uploadPhotoProduct(this.currentFileUpload, this.currentProduct.id).subscribe((event)=>{
      if(event.type===HttpEventType.UploadProgress){
        this.progress=Math.round(100*event.loaded / event.total);

      }
      else if(event instanceof HttpResponse){
        // alert("photo chargée avec succés")
        // this.getProduit();
        this.timestamp=Date.now();

      }
    },
      err=>{
        alert("Probléme de téléchargement");



       } )
    }

    getTS(){
      return this.timestamp;
    }

    onProductDetails(p:Produits){
      let url=btoa(p._links.product.href)

      this.router.navigate(["Produit-details/"+url])
    }

    deleteProduit(id){
      this.produit.deleteProduitById(id).subscribe((data)=>{
        console.log("produis supprime")
      })

    }
}
