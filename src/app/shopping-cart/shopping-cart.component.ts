import { Component, OnInit, DoCheck} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingCart } from './shopping-cart.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit , DoCheck{
  constructor(private shoppingCartService:ShoppingCartService,private formBuilder: FormBuilder) { }
  freeShipping='0.00'
  Standart='10.00'
  Express='20.00'

  
  shippingForm:FormGroup


  cartList:ShoppingCart[]=[]

  ngDoCheck(){
    this.cartList=this.shoppingCartService.getCartItem();
  }
  ngOnInit(): void {
   this.cartList=this.shoppingCartService.getCartItem();
    this.shippingForm = this.formBuilder.group({
      shippingCost: [this.freeShipping ,[ Validators.required]]
    })
  }
  
getTotal(){
  return Number(this.shippingForm.controls.shippingCost.value);
}

  deleteListItem(index:number){
    this.shoppingCartService.deleteListItem(index)
    this.cartList=this.shoppingCartService.getCartItem();
    // this.cartList = this.cartList.filter(item => item !== item);
  }

  onInputSpinnerChange(value:any, item:any){
    item.quantity = value
  }

  subTotal(){
    return Number(this.cartList.reduce((acc, item) => {
        return acc + (item.price * item.quantity);  
    },0));
  }
 
   onUpdate(){
    this.cartList=this.shoppingCartService.getCartItem();
   }
   
 }
