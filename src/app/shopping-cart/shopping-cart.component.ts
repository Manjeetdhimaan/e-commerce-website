import { Component, OnInit, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductListingService } from '../product-listing/product-listing.service';
import { ShoppingCartService } from './shopping-cart.service';
import firebase from 'firebase/app'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, DoCheck {
  constructor(private shoppingCartService: ShoppingCartService,
    private formBuilder: FormBuilder,
    private productListService: ProductListingService,
    private afs: AngularFirestore) { }

  freeShipping = '0.00'
  Standart = '10.00'
  Express = '20.00'


  shippingForm: FormGroup

  @ViewChild('n') spinnerValue: ElementRef<any>
  cartList = []
  cartItems = this.shoppingCartService.cart.value;
  ngDoCheck() {
    this.cartList = this.shoppingCartService.getCartItem()
   }

  ngOnInit() {
    this.shippingForm = this.formBuilder.group({
      shippingCost: [this.freeShipping, [Validators.required]]
    });
    this.cartList = this.shoppingCartService.getCartItem()
    
    /*---properties for getting cartlist from firebase--*/
    console.log('cart ', this.cartList);

    // this.productListService.getProductsFirebase()
    //   .subscribe((allProducts: any[]) => {
    //     this.cartList = allProducts.filter(p => {
    //       if (this.cartItems[p.id]) {
    //         return p
    //       }
    //     });
    //     console.log('product ', this.cartList)
    //   })

  }


  getTotal() {
    return Number(this.shippingForm.controls.shippingCost.value);

  }

  deleteListItem(id: any, index: any) {
    this.cartList.splice(index, 1)
    this.shoppingCartService.deleteListItem(id)
  }

  onInputSpinnerChange(value: any, item: any) {
    this.shoppingCartService.onInputSpinnerChange(value, item)
  }

  subTotal() {
    return Number(this.cartList.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0));

  }

  onUpdate() {
    this.cartList = this.shoppingCartService.getCartItem()
  }


}