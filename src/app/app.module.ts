import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileMenuComponent } from './core/header/mobile-menu/mobile-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './core/home/banner/banner.component';
import { NewArrivalsComponent } from './core/home/new-arrivals/new-arrivals.component';
import { PopularCategoriesComponent } from './core/home/popular-categories/popular-categories.component';
import { AccordionModule } from './accordion/accordion.module';
import { AccordiondemoComponent } from './core/header/accordiondemo/accordiondemo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MobileMenuComponent,
    BannerComponent,
    NewArrivalsComponent,
    PopularCategoriesComponent,
    AccordiondemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
