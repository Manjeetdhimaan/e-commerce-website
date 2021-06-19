import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileMenuComponent } from './core/header/mobile-menu/mobile-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewArrivalsComponent } from './core/home/new-arrivals/new-arrivals.component';
import { UIComponentsModule } from './ui-components/ui-components.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistService } from './wishlist/wishlist.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { LogInComponent } from './core/log-in/log-in.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailService } from './product-detail/product-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MobileMenuComponent,
    NewArrivalsComponent,
    ShoppingCartComponent,
    WishlistComponent,
    LogInComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    UIComponentsModule,
    IvyCarouselModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxNumberSpinnerModule,
    ClickOutsideModule
  ],
  providers: [ShoppingCartService,WishlistService,ProductDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
