import { Options } from '@angular-slider/ngx-slider';
import { Component, DoCheck, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss']
})
export class PriceSliderComponent implements OnInit, DoCheck{

  constructor() { }
  
  ngDoCheck(){
  
  }
  ngOnInit(): void {
  }
  @Input() minValue: number = 0;
  @Input() maxValue:number = 750; 

  @Input() options: Options = {
    // floor: 0,
    // step: 50,
    // ceil: 1000,
    // showTicks: false
  };



}
