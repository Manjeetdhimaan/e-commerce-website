
import { Component, OnInit } from '@angular/core';
import { ProductListingService } from './product-listing.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  constructor(private productListService: ProductListingService  ) { }
  productList: any[]
  ngOnInit(): void {
    this.productList = this.productListService.getProductList()
  }

  setClass: string = 'product product-7 text-center'
  visible: string = "visible"

  p: number
  responsive: boolean = true
  itemsPerPage:number = 6
}

