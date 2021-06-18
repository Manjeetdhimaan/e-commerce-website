import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { WishlistService } from 'src/app/wishlist/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private shoppingCartServive:ShoppingCartService, private wishlistService:WishlistService) { }

  @Input() category: string = '';
  @Input() subCategory: string = '';
 
   
  
  ngOnInit(): void {
  }
  @Input() data:any={};

  getColor(product:any,index:number){
    return `background:${product.color[index]}`
  }

  labelColorMapping :any ={
    new:"label-new",
    sale:"label-primary"
  }

  getLabelColor(label:string){
    label = String(label).toLowerCase();
    if(label && this.labelColorMapping[label]){
      return "product-label "+this.labelColorMapping[label];
    }else{
      return "product-label";
    }
  }

   labelMapping :any = {
     sale : 'sale',
   }

  getLabel(label:string){
    label = String(label).toLowerCase();
    return (label == this.labelMapping[label])?true:false
  }

  onAddtoCart(item:any){
    this.shoppingCartServive.onaddItemToCart(item)
  }
  onAddItemToWishList(item:any){
    this.wishlistService.onAddItemToWishList(item)
  }



}
