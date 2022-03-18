import { Categorie } from './../module/categorie';
import { Produits } from './../module/produits';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
URL=environment.apiUrl;
categories:Categorie;
  constructor(private http: HttpClient) { }


  addProduct(produit:Produits):Observable<Produits>{
return this.http.post<Produits>(this.URL+'products',produit );
  }
//   getAllProduct():Observable<Produits>{
//     return this.http.get(this.URL, );
//       }
  getProducts():Observable<Produits>{
        return this.http.get<Produits>(this.URL+"products/search/selected" );
          }
          getProductById(url):Observable<Produits>{
            return this.http.get<Produits>(url)

          }
  getCategories():Observable<any>{
            return this.http.get(this.URL+ "categories");
              }
getProductByCat(c){
  return this.http.get(this.URL+ "categories/"+c.id+"/products")
}
 getCategoriesById(id):Observable<any>{
                return this.http.get(this.URL+ "categories/"+id+"/products");
                  }

  updateProduct(id, p: Produits):Observable<Produits>{
        return this.http.put<Produits>(this.URL+"products" ,id+p );
          }
addCategorie(c:Categorie):Observable<Categorie>{
  // let HTTPOptions:Object = {

  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Request-Method':'GET, DELETE, HEAD, OPTIONS, Post',
  //     'X-Requested-With': 'XMLHttpRequest',

  //   }),
  //   responseType: 'text'
  //  }
  return this.http.post<Categorie>(this.URL+"categories",c)
}


  promotionProduits(){
    return this.http.get(this.URL+"products/search/promo")
  }


  disponibleProduits(){
    return this.http.get(this.URL+"products/search/stock")
  }

  rechercherProduitsParNom(nom):Observable<Produits>{
    return this.http.get<Produits>(this.URL+"products/search/findByCritere"+nom)
  }

  deleteCategorieById(id){
    return this.http.delete(this.URL+"categories/"+id)
  }

  deleteProduitById(id){
    return this.http.delete(this.URL+"products/"+id)

  }


}
