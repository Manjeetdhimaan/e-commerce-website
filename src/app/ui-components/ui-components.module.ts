import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    ProductComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
  AccordionComponent,
  AccordionItemComponent,  
  ProductComponent,
  BannerComponent
  ]
})
export class UIComponentsModule { }
