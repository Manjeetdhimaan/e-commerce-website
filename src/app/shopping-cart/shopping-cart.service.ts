

import {ShoppingCart} from './shopping-cart.model'

export class ShoppingCartService {

private cartList:ShoppingCart[]=[]

    constructor(){ }

    getCartItem(){
       return this.cartList.slice();
    }
    deleteListItem(index:number){
        this.cartList.splice(index,1)
      }
    onaddItemToCart(item:any){
        if (this.cartList.some(obj => obj.id === item.id)) {
            this.cartList.push()
          }
          else {
            this.cartList.push(item)
          }
      
    } 
      
}