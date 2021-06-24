

import { ShoppingCart } from './shopping-cart.model'

export class ShoppingCartService {

  private cartList: ShoppingCart[] = []
  public data: any;
  public Json: any;
  public userToken: any;
  constructor() {
    this.data = localStorage.getItem('cartData')
    console.log(this.data)
    this.Json = JSON.parse(this.data);
    this.cartList =this.Json
    console.log(this.Json)
  }


  getCartItem() {
     return this.cartList.slice();
  }

  deleteListItem(index: number) {
    this.cartList.splice(index, 1)
    localStorage.setItem('cartData', JSON.stringify(this.cartList))
  }

  onaddItemToCart(item: any) {
    if (this.cartList.some(obj => obj.id === item.id)) {
      this.cartList.push()
    }
    else {
      this.cartList.push(item)
    }
    localStorage.setItem('cartData', JSON.stringify(this.cartList))
  }

}