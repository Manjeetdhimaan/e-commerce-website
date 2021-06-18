

import {ShoppingCart} from './shopping-cart.model'

export class ShoppingCartService {

private cartList:ShoppingCart[]=[
new ShoppingCart( 
    '1',
    'assets/images/products/table/product-1.jpg',
    'Beige knitted elastic runner shoes',
    '84.00',
    '1'),
new ShoppingCart( 
    '2q',
    'assets/images/products/table/product-2.jpg',
    'Blue utility pinafore denim dress',
    '76.00',
    '1')
]

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