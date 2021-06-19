
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
 
   
  /* properties of base home carousel starts*/
  width: string = "1349px";
  images = [1].map((n) => `../../../assets/images/demos/demo-12/slider/slide-${n}.jpg`);
  showNavigationArrows = false;
  showNavigationIndicators = false;
  /*end of properties of base home carousel*/





  /*properties carousel component starts */
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    navSpeed: 400,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 1
      },
      480: {
        "items": 1
      },
      768: {
        "items": 3
      },
      992: {
        "items": 4
      },
      1200: {
        "items": 4,
        "nav": true
      }
    },
    nav: true
  }
  carouselHeight = 480;
  cellsToShow = 4;
  
  products = [{
    id:'a1',
    category: 'clothing',
    subCategory: 'Linen-blend dress',
    label: '',
    price: '60.00',
    oldPrice: '',
    imageSrc: ['1', '1-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: ["#e5dcb1;", "#bacbd8;"],
    quantity:'1',
    stockStatus:'in stock'
  },
  {
    id:'a2',
    category: 'shoes',
    subCategory: 'Sandlas with lacing',
    label: 'Sale',
    price: '70.00',
    oldPrice: '90.00',
    imageSrc: ['2', '2-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: [],
    quantity:'1',
    stockStatus:'in stock'
  },
  {
    id:'a3',
    category: 'clothing',
    subCategory: 'Paper bag trousers',
    label: '',
    price: '60.00',
    oldPrice: '',
    imageSrc: ['3', '3-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: ["#9fac76;", "#333333;"],
    quantity:'1',
    stockStatus:'in stock'

  },
  {
    id:'a4',
    category: 'handbags',
    subCategory: 'Bucket bag',
    label: '',
    price: '350.00',
    oldPrice: '',
    imageSrc: ['4', '4-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: [],
    quantity:'1',
    stockStatus:'out of stock'
  },
  {
    id:'a5',
    category: 'clothing',
    subCategory: 'Silk-blended kaftan',
    label: '',
    price: '370.00',
    oldPrice: '',
    imageSrc: ['5', '5-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: [],
    quantity:'1',
    stockStatus:'in stock'
  },
  {
    id:'a6',
    category: 'Sandles',
    subCategory: 'Spring sandlas',
    label: 'New',
    price: '59.00',
    oldPrice: '',
    imageSrc: ['6', '6-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    color: [],
    quantity:'1',
    stockStatus:'out of stock'
  }
  ]
  /*properties carousel component end */


  /*properties banner component*/

  /*first banner product*/
  imageSrc1: string = "../../../assets/images/demos/demo-12/banners/banner-1.jpg"
  bannerTitle1: string = "This Week's Most Wanted"
  /*end of  first banner product*/


  /*second banner product*/
  buttonText2: string = "Discover Now"
  imageSrc2: string = "../../../assets/images/demos/demo-12/banners/banner-2.jpg"
  bannerTitle2: string = "Bags by Mood"
  /*end of second banner product*/


  /*third banner product*/
  imageSrc3: string = "../../../assets/images/demos/demo-12/banners/banner-3.jpg"
  bannerTitle3: string = "The Trend Story"
  /*end of third banner product*/
  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth + "px";
  }



  /*properties banner component*/

  /*first banner product*/
  imageSrc4: string = "../../../assets/images/demos/demo-12/banners/banner-4.jpg"
  bannerTitle4: string = "Accessories"
  subTitle4: string = "16 items "
  /*end of  first banner product*/


  /*second banner product*/
  buttonText5: string = "Discover Now"
  imageSrc5: string = "../../../assets/images/demos/demo-12/banners/banner-5.jpg"
  bannerTitle5: string = "Clothing"
  subTitle5: string = "6 items "
  /*end of second banner product*/


  /*third banner product*/
  imageSrc6: string = "../../../assets/images/demos/demo-12/banners/banner-6.jpg"
  bannerTitle6: string = "Shoes"
  subTitle6: string = "24 items "
  /*end of third banner product*/

  /*fourth banner product*/
  imageSrc7: string = "../../../assets/images/demos/demo-12/banners/banner-7.jpg"
  bannerTitle7: string = "Jewellery"
  subTitle7: string = "8 items"
  /*end of fourth banner product*/

}



