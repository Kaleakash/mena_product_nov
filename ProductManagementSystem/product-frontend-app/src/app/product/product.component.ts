import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product:Array<Product>=[];
  productRef = new FormGroup({
    _id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl(),
    url:new FormControl()
  })   
  constructor(public productService:ProductService){} // DI product service
ngOnInit(): void {      // it call only once when component get loaded...
    this.loadProductDetails();
}

  loadProductDetails() {
    this.productService.loadProductInfo().subscribe({
      next:(result:any)=> {
          this.product=result;
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        console.log("Product Data loaded...")
      }
    })
  }

  storeProduct(){
    let product  = this.productRef.value;
    this.productService.storeProduct(product).subscribe({
      next:(result:any)=> {
          console.log(result);
      },
      error:(error:any)=> {
          console.log(error);
      },
      complete:()=> {
          console.log("store done!")
          this.loadProductDetails();
      }
    })
    // this.productService.storeProduct(product).subscribe({
    //   next:(result:any)=> {
    //       console.log(result);
    //   },
    //   error:(error:any)=> {
    //       console.log(error);
    //   },
    //   complete:()=> {
    //       console.log("store done!")
    //       this.loadProductDetails();
    //   }
    // })

    this.productRef.reset();
  }
}
