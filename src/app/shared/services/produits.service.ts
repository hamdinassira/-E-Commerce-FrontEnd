import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produits } from '../module/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
URL=environment.apiUrl;
  constructor(private http: HttpClient) { }

//   addProduct(produit):Observable<Produits>{
// return this.http.post(this.URL, );
//   }
//   getAllProduct():Observable<Produits>{
//     return this.http.get(this.URL, );
//       }
  getProducts():Observable<any>{
        return this.http.get(this.URL+"products" );
          }
  getCategories():Observable<any>{
            return this.http.get(this.URL+ "categories");
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
}
