import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { WishlistService } from '../wishlist/wishlist.service';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productDetailService:ProductDetailService,
     private shoppingCartService:ShoppingCartService,
     private wishListService:WishlistService) { }

productdetail:any[]
   show=false
  ngOnInit(): void {
    this.productdetail = this.productDetailService.getProductDetail()
    this.productdetail.some(obj =>  this.imagesrc = obj.imageSrc[0])
    if(this.productdetail.length !== 0){
         this.show=true
    }

  }
  
  onAddItemToCart(item:any){
    this.shoppingCartService.onaddItemToCart(item)
  }

   onAddItemToWishlsit(item:any){
    this.wishListService.onAddItemToWishList(item)
   }
  onInputSpinnerChange(value:any, item:any){
    item.quantity = value
  }

  imagesrc=""; 
   
  onChangeImgColor(imageNameObject:any){
  this.imagesrc = imageNameObject;
  console.log(this.imagesrc)
  }
     
}
