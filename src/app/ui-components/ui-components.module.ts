import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/accordion-item.component';
import { ProductComponent } from './product/product.component';
import { BannerComponent } from './banner/banner.component';
import { InputSpinnerComponent } from './input-spinner/input-spinner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    ProductComponent,
    BannerComponent,
    InputSpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
  AccordionComponent,
  AccordionItemComponent,  
  ProductComponent,
  BannerComponent,
  InputSpinnerComponent
  ]
})
export class UIComponentsModule { }
