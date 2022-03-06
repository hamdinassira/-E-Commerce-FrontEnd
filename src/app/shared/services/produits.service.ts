import { Produits } from './../module/produits';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
URL=environment.apiUrl;
categories;
  constructor(private http: HttpClient) { }

//   addProduct(produit):Observable<Produits>{
// return this.http.post(this.URL, );
//   }
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

  deleteProduct(id):Observable<any>{
    return this.http.delete(this.URL, );
      }
  // updateProduct(id):Observable<Produits>{
  //       return this.http.put(this.URL, id, );
  //         }



  promotionProduits(){
    return this.http.get(this.URL+"products/search/promo")
  }

  disponibleProduits(){
    return this.http.get(this.URL+"products/search/stock")
  }

  produitsParNom(nom){
    return this.http.get(this.URL+"products/search/findByCritere")
  }
}
