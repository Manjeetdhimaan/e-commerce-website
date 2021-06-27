import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-product-list-grid4',
  templateUrl: './product-list-grid4.component.html',
  styleUrls: ['./product-list-grid4.component.scss']
})
export class ProductListGrid4Component implements OnInit {

  constructor(private productListService: ProductListingService) { }

  ngOnInit(): void {
    this.productListGrid4 = this.productListService.getProductList();
  }
  setClass:string = 'product product-7 text-center'
  visible:string = "visible"
  p:any
  responsive:boolean = true
  
  productListGrid4:any = []
}
