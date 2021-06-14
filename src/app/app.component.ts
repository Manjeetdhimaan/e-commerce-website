import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-shop';
  
  constructor() {}
  /*properties carousel component starts */







  /*properties banner component*/

  /*first banner product*/
  imageSrc1: string = "../../../assets/images/demos/demo-12/banners/banner-4.jpg"
  bannerTitle1: string = "Accessories"
  subTitle1:string="16 items "
  /*end of  first banner product*/


  /*second banner product*/
  buttonText2: string = "Discover Now"
  imageSrc2: string = "../../../assets/images/demos/demo-12/banners/banner-6.jpg"
  bannerTitle2: string = "Clothing"
  subTitle2:string="6 items "
  /*end of second banner product*/


  /*third banner product*/
  imageSrc3: string = "../../../assets/images/demos/demo-12/banners/banner-7.jpg"
  bannerTitle3: string = "Shoes"
  subTitle3:string="24 items "
  /*end of third banner product*/

  /*fourth banner product*/
  imageSrc4: string = "../../../assets/images/demos/demo-12/banners/banner-5.jpg"
  bannerTitle4: string = "Jewellery"
  subTitle4:string="8 items"
  /*end of fourth banner product*/

  toggleMobileMenu = false;
  mobileMenuToggle() {
    this.toggleMobileMenu = !this.toggleMobileMenu
  }
 

  change(value: number): void {
    console.log(value);
}
}
