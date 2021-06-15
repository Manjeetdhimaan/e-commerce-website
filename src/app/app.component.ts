import { Component, DoCheck, OnInit } from '@angular/core';
import { ShoppingCart } from './shopping-cart/shopping-cart.model';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'new-shop';
  
  constructor(private shoppingCartService:ShoppingCartService) {}

  cartList:ShoppingCart[]=[]
  
  ngOnInit(){
    this.cartList=this.shoppingCartService.getCartItem();
  }
  ngDoCheck(){
    this.cartList=this.shoppingCartService.getCartItem();
  }
  
  toggleMobileMenu = false;
  mobileMenuToggle() {
    this.toggleMobileMenu = !this.toggleMobileMenu
  }

  change(value: number): void {
    console.log(value);
}

deleteListItem(index:number){
  this.shoppingCartService.deleteListItem(index)
  this.cartList=this.shoppingCartService.getCartItem();
 
}

subTotal(){
  return Number(this.cartList.reduce((acc, item) => {
      return acc + (item.price * item.quantity);  
  },0));
}
}
