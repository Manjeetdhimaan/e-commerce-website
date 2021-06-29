

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ShoppingCart } from './shopping-cart.model'
import firebase from 'firebase/app'
import { Storage } from "@capacitor/storage"
import { BehaviorSubject } from 'rxjs';
const CART_STORAGE_KEY = 'MY_CART'
// const { Storage } = Plugins;

const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);
@Injectable()
export class ShoppingCartService {
  cart = new BehaviorSubject({})
  private cartList: ShoppingCart[] = []
  public data: any;
  public Json: any;
  public userToken: any;


  cartListCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.data = localStorage.getItem('cartData')
    this.Json = JSON.parse(this.data);
    this.cartList = this.Json
    this.cartListCollection = this.afs.collection('cart-list');
  }


  getCartListFirebase() {
    return this.cartListCollection.valueChanges({ idField: 'id' });
  }
  getCartItem() {
    return this.cartList.slice();
  }


  cartKey = null

  async loadCart() {
    const result = await Storage.get({ key: CART_STORAGE_KEY })
    console.log('Cart From Storage ', result)
    if (result.value) {
      this.cartKey = result.value;
      this.afs.collection('cart-list').doc(this.cartKey).valueChanges().subscribe((result: any) => {
        delete result['lastUpdate']
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

  deleteListItem(index: any) {
    this.cartList.splice(index, 1)
    localStorage.setItem('cartData', JSON.stringify(this.cartList))


    // this.afs.collection('cart-list').doc(this.cartKey).update({
    //   [id]:INCREMENT
    //    })
  }

  onaddItemToCart(item: any) {
    if (this.cartList.some(obj => obj.id === item.id)) {
      this.cartList.push()
    }
    else {
      this.cartList.push(item)
    }
    localStorage.setItem('cartData', JSON.stringify(this.cartList))


    //   this.afs.collection('cart-list').doc(this.cartKey).update({
    //  [id]:INCREMENT
    //   })

  }

}