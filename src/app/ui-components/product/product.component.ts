import { Component, OnInit, Input } from '@angular/core';
import { ProductDetailService } from 'src/app/product-detail/product-detail.service';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { WishlistService } from 'src/app/wishlist/wishlist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private shoppingCartServive: ShoppingCartService,
    private wishlistService: WishlistService,
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private router: Router) { }

  @Input() category: string = '';
  @Input() subCategory: string = '';



  ngOnInit(): void {
  }
  @Input() data: any = {};

  getColor(product: any, index: number) {
    return `background:${product.color[index]}`
  }

  labelStockStatus: any = {
    'out of stock': 'out of stock'
  }
  labelColorMapping: any = {
    'new': "label-new",
    'sale': "label-primary",
    'top':"label-top",
    'out of stock': 'label-out'
  }

  getLabelColor(label: any, item: any) {
    item.stockStatus = String(item.stockStatus).toLowerCase();
    label = String(label).toLowerCase();
    if (item.stockStatus == this.labelStockStatus[item.stockStatus]) {
      item.label = item.stockStatus
    }
    if (label && this.labelColorMapping[label]) {
      return "product-label " + this.labelColorMapping[label];
    } else {
      return "product-label";
    }
  }

  getStockStatus(stockStatus: any) {
    stockStatus = String(stockStatus).toLowerCase();
    if (stockStatus == this.labelStockStatus[stockStatus]) {
      return true;
    }
    return false;
  }

  labelMapping: any = {
    sale: 'sale'
  }

  getLabel(label: any) {
    label = String(label).toLowerCase();
    return (label == this.labelMapping[label]) ? true : false
  }

  onAddtoCart(item: any) {
    this.shoppingCartServive.onaddItemToCart(item)
    
  }
  onAddItemToWishList(item: any) {
    this.wishlistService.onAddItemToWishList(item)
    
  }

  onAddToProductDetail(item: any) {
    this.productDetailService.getProductDetailtem(item)
  }

  goToItems() {
    this.router.navigate(['product-detail']);
  }


}
