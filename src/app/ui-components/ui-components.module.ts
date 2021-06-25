import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { InputSpinnerComponent } from './input-spinner/input-spinner.component';
import { FormsModule } from '@angular/forms';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    ProductComponent,
    BannerComponent,
    InputSpinnerComponent,
    PriceSliderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSliderModule
  ],
  exports: [
  AccordionComponent,
  AccordionItemComponent,  
  ProductComponent,
  BannerComponent,
  InputSpinnerComponent,
  PriceSliderComponent
  ]
})
export class UIComponentsModule { }
