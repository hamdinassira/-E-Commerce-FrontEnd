import { ProduitsService } from './../shared/services/produits.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produits } from '../shared/module/produits';
import { AuthService } from '../shared/services/auth.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {

  currentProduit: Produits;
  mode:number=0;
  progress: number;
  currentFileUpload: any;
  selectedFiles: any;
  timestamp: number=0;
  editPhoto: boolean;
  constructor(private router:Router, private route: ActivatedRoute, private produiService:ProduitsService,
              private authService:AuthService) { }

  ngOnInit(): void {
    let url=atob(this.route.snapshot.params.url)
    console.log(url)
    this.produiService.getProductById(url).subscribe((data)=>{
      this.currentProduit=data
      console.log(this.currentProduit)   })
  }

  onEditPhoto(p){

    this.currentProduit=p;
    this.editPhoto=true;
    console.log(this.editPhoto)
  }

  onSelectFile(event){
   this.selectedFiles=event.target.files;
  }

  uploadPhoto(){
    this.progress=0;
    this.currentFileUpload=this.selectedFiles.item(0);
    this.authService.uploadPhotoProduct(this.currentFileUpload, this.currentProduit.id).subscribe((event)=>{
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

    onEditProduct(){
      this.mode=1
    }
}
