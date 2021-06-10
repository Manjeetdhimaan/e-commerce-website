import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() category:string='';
  @Input() subCategory:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
