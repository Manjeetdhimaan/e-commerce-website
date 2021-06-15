
import {ShoppingCart} from './shopping-cart.model'

export class ShoppingCartService {

private cartList:ShoppingCart[]=[
new ShoppingCart( 
    'assets/images/products/table/product-1.jpg',
    'Beige knitted elastic runner shoes',
    '84.00',
    '1'),
new ShoppingCart( 
    'assets/images/products/table/product-2.jpg',
    'Blue utility pinafore denim dress',
    '76.00',
    '1'),
new ShoppingCart( 
    'assets/images/products/table/product-3.jpg',
    'Orange saddle lock front chain cross body bag',
    '91.00',
    '1'),
]
    constructor(){ }

    getCartItem(){
       return this.cartList.slice();
    }
    deleteListItem(index:number){
        this.cartList.splice(index,1)
    
        // this.cartList = this.cartList.filter(item => item !== item);
      }
    
    
}