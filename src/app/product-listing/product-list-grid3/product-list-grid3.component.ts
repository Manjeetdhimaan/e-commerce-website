import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-product-list-grid3',
  templateUrl: './product-list-grid3.component.html',
  styleUrls: ['./product-list-grid3.component.scss']
})
export class ProductListGrid3Component implements OnInit {
  p:any
  responsive:boolean =true
  maxSize:number= 3
  constructor(private productListService: ProductListingService) { }

  ngOnInit(): void {
    this.productListGrid3 = this.productListService.getProductList();
  }
  setClass:string = 'product product-7 text-center'
  visible:string = "visible"
  productListGrid3:any = [ ]

}
