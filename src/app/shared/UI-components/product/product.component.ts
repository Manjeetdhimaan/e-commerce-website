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
  product = [{
    category: 'clothing',
    subCategory: 'Linen-blend dress',
    label: '',
    price: '60.00',
    oldPrice:'',
    img: ['1', '1-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: ["#e5dcb1;", "#bacbd8;"]


  },
  {
    category: 'shoes',
    subCategory: 'Sandlas with lacing',
    label: 'sale',
    price: '70.00',
    oldPrice: '90.00',
    img: ['2', '2-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: []
  },
  {
    category: 'clothing',
    subCategory: 'Paper bag trousers',
    label: '',
    price: '60.00',
    oldPrice: '',
    img: ['3', '3-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: ["#9fac76;", "#333333;"]

  },
  {
    category: 'handbags',
    subCategory: 'Bucket bag',
    label: '',
    price: '350.00',
    oldPrice: '',
    img: ['4', '4-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
   
    color: []
  },
  {
    category: 'clothing',
    subCategory: 'Silk-blended kaftan',
    label: '',
    price: '370.00',
    oldPrice: '',
    img: ['5', '5-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    
    color: []
  },
  {
    category: 'Sandles',
    subCategory: 'Spring sandlas',
    label: 'New',
    price: '59.00',
    oldPrice: '',
    img: ['6', '6-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),  
    color: []
  }
  ]

  getColor(product:any,index:number){
    return `background:${product.color[index]}`
  }
  getLabelColor(label:string){
    label = String(label).toLowerCase();
    if(label && this.labelColorMapping[label]){
      return "product-label "+this.labelColorMapping[label];
    }else{
      return "product-label";
    }
  }

  labelColorMapping :any ={
    new:"label-new",
    sale:"label-primary"
  }
   labelMapping :any = {
     sale : 'sale'

   }
  getLabel(label:string){
    label = String(label).toLowerCase();
    if (this.labelMapping[label]){
         return this.labelMapping[label]
    }
    console.log(this.labelMapping[label])
  }
}
