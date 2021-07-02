

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShoppingCart } from './shopping-cart.model'
import firebase from 'firebase/app'
import { Storage } from "@capacitor/storage"
import { BehaviorSubject } from 'rxjs';
import { ProductListingService } from '../product-listing/product-listing.service';
const CART_STORAGE_KEY = 'MY_CART'
// const { Storage } = Plugins;

const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);
@Injectable()
export class ShoppingCartService {
  cart = new BehaviorSubject({})
   cartList = []


  
  constructor(private afs: AngularFirestore , private productListService:ProductListingService ) {
    
    this.loadCart();
    this.getCartProduct()
  }

  getCartItem() {
    return this.cartList.slice();
  }


  cartKey = null

  async loadCart() {
    const result = await Storage.get({ key: CART_STORAGE_KEY });
    console.log('Cart From Storage ', result);
    if (result.value) {
      this.cartKey = result.value;
      this.afs.collection('cart-list').doc(this.cartKey).valueChanges().subscribe((result: any) => {
        delete result['lastUpdate'];
        console.log('cart changed ', result);
        this.cart.next(result || {});
      })
    }

    else {
      const fbDocument = await this.afs.collection('cart-list').add({
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
      console.log('new Cart', fbDocument);
      this.cartKey = fbDocument.id;
      await Storage.set({ key: CART_STORAGE_KEY, value: this.cartKey });
    }
  }


  deleteListItem(id: any) {
    this.afs.collection('cart-list').doc(this.cartKey).update({
      [id]: firebase.firestore.FieldValue.delete(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  onaddItemToCart(id: any) {
    this.afs.collection('cart-list').doc(this.cartKey).update({
      [id]: id,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }


  onInputSpinnerChange(value: any, item: any) {
    item.quantity = value
  }

   getCartProduct(){
     debugger
    this.productListService.getProductsFirebase()
    .subscribe((allProducts: any[]) => {
      this.cartList = allProducts.filter(p => {
        if (this.cart.value[p.id]) {
          return p
        }
      });
      console.log('product ', this.cartList)
    })

   }
}