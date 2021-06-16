import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistDropdown = false
  constructor(private shoppingCartService: ShoppingCartService) { }


  wishList = [
    {
      id: '1',
      imgSrc: 'assets/images/products/table/product-1.jpg',
      title: 'Beige knitted elastic runner shoes',
      price: '84.00',
      stockStatus: 'In stock'
    },
    {
      id: '2',
      imgSrc: 'assets/images/products/table/product-2.jpg',
      title: 'Blue utility pinafore denim dress',
      price: '76.00',
      stockStatus: 'In stock'
    },
    {
      id: '3',
      imgSrc: 'assets/images/products/table/product-3.jpg',
      title: 'Orange saddle lock front chain cross body bag',
      price: '52.00',
      stockStatus: 'Out of stock'
    }
  ]


  cartList: any[]

  ngOnInit(): void {
    this.cartList = this.shoppingCartService.getCartItem();
    console.log(this.cartList)
  }

  dropdownToggler() {
      this.wishlistDropdown = !this.wishlistDropdown;
  }

  stockStatusMapping: any = {
    'out of stock': 'out of stock',
  }

  getStockStatus(status: string) {
    status = String(status).toLowerCase();
    return (status == this.stockStatusMapping[status]) ? true : false
  }

  onDeleteItem(index: number) {
    this.wishList.splice(index, 1)
  }


  addToWishlist(item: any) {
    for (let i of this.cartList) {
      if (item == i.id) {
        return true
      }
      else {
        return false
      }
    }
    return false
  }

}

