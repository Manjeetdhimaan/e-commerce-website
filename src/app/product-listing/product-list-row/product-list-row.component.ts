import { Component, OnInit } from '@angular/core';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-product-list-row',
  templateUrl: './product-list-row.component.html',
  styleUrls: ['./product-list-row.component.scss']
})
export class ProductListRowComponent implements OnInit {

  constructor(private productListService: ProductListingService) { }

  ngOnInit(): void {
    this.productListRow = this.productListService.getProductList();
  }
  p:any
  responsive:boolean =true
  visible:string = "visible"
  
  layout:string= "list"
  
  productListRow:any = [ ]
}
