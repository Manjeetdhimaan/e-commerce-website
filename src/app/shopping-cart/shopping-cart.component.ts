import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  min: number = 1;
  max: number= 10;
 value: number = 1;
  step: number = 1;

 cartList=[
   {
     imageSrc:'assets/images/products/table/product-1.jpg' ,
     title:'Beige knitted elastic runner shoes',
     price:'84.00'
    },
   {
     imageSrc:'assets/images/products/table/product-1.jpg' ,
     title:'Beige knitted elastic runner shoes',
     price:'89.00'
    }
  ]
  constructor() { }
  ngOnInit(): void {
  }

 
  @Output('change') change: EventEmitter<number> = new EventEmitter();
  disabled: boolean;

  _propagateChange:any = () => {};
  _onTouched: () => void;

  writeValue(value:number):void {
    this.value = value || 0;
  }

  registerOnChange(fn:any):void {
    this._propagateChange = fn;
  }

  registerOnTouched(fn:any):void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled:boolean):void {
    this.disabled = isDisabled;
  }

  inc():void {
    let value = this.value + this.step
    if(value >= this.min && value <= this.max){
      this.value = value;
      this._onChange();
    }
   
  }

  dec():void {
    let value = this.value - this.step
    if(value >= this.min && value <= this.max){
      this.value = value;
      this._onChange();
    }
  }

  private _onChange():void {
    this._propagateChange(this.value);

    this.change.emit(this.value);
  }

  deleteListItem(index:number){
    this.cartList.splice(index,1)
    console.log( index)


    // this.cartList = this.cartList.filter(item => item !== item);
  }
}
