import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ShoppingCart } from 'src/app/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) { }

  
  @ViewChild('menu') menuFocus?: ElementRef;
  @ViewChild('searchInput') searchInput?: ElementRef;
  toggleMobileMenu = false;
  searchToggle = false;
  hover = false
  @Output() mobileMenuClose = new EventEmitter();

  cartList: ShoppingCart[] = []


  ngOnInit() {
    this.cartList = this.shoppingCartService.getCartItem();
  }

  ngDoCheck() {
    this.cartList = this.shoppingCartService.getCartItem();
  }

  

  mobileMenuToggle() {
    this.toggleMobileMenu = !this.toggleMobileMenu
    this.mobileMenuClose.emit(null);
  }

  toggleSearch() {
    this.searchToggle = !this.searchToggle
    var focus = this.searchInput?.nativeElement
    setTimeout(() => {// this will make the execution after the above boolean has changed;
      focus.focus();
    }, 0);

  }
  hoverToggle() {
    this.hover = !this.hover;
  }

  change(value: number): void {
    console.log(value);
  }


  /*shopping cart method & properties starts*/
  
   
  deleteListItem(index: number) {
    this.shoppingCartService.deleteListItem(index)
    this.cartList = this.shoppingCartService.getCartItem();

  }

  subTotal() {
    return Number(this.cartList.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0));
  }
  
   /*shopping cart method end*/
}

