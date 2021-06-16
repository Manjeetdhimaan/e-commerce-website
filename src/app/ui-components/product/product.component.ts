import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() category: string = '';
  @Input() subCategory: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  @Input() data:any={};

  getColor(product:any,index:number){
    return `background:${product.color[index]}`
  }

  labelColorMapping :any ={
    new:"label-new",
    sale:"label-primary"
  }

  getLabelColor(label:string){
    label = String(label).toLowerCase();
    if(label && this.labelColorMapping[label]){
      return "product-label "+this.labelColorMapping[label];
    }else{
      return "product-label";
    }
  }

   labelMapping :any = {
     sale : 'sale',
   }

  getLabel(label:string){
    label = String(label).toLowerCase();
    return (label == this.labelMapping[label])?true:false
  }
}
