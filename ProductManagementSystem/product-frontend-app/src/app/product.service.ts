import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { } // DI for HttpClient


  // loadProductInfo(){
    
  //   this.httpClient.get("http://localhost:3000/product/findProduct").
  //   subscribe({
  //     next:(result:any)=> {
  //       console.log(result)
  //     },
  //     error:(error:any)=> {
  //       console.log(error)
  //     },
  //     complete:() => {
  //       console.log("Data Loaded....")
  //     }
  //   })

  // }


  loadProductInfo():Observable<Product[]>{
 
    //this.httpClient.get("",)
    return this.httpClient.get<Product[]>("http://localhost:3000/product/findProduct",{responseType:'json'});  // by default json 

  }

  storeProduct(product:any):Observable<string> {
    return this.httpClient.post("http://localhost:3000/product/storeProduct",product,{responseType:'text'})
  }
}






