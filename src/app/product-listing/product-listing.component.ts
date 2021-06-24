import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getTotalReviewsAvg()
  }
  productList:any = [{
    id:'a1',
    category: 'clothing',
    subCategory: 'Linen-blend dress',
    label: '',
    price: '60.00',
    oldPrice: '',
    imageSrc: ['1', '1-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    quantity:'1',
    stockStatus:'Out of stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Nirmal",
      reviewlikes:0,
      reviewdislikes:0,
      time: new Date().getTime()
    },
      {
      reviewRatingStar:5,
      reviewersName:"Navjeet Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time: new Date().getTime()
    }
  ],
    description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum
    dolores assumenda asperiores facilis porro reprehenderit animi culpa
    atque blanditiis commodi perspiciatis doloremque, possimus, explicabo,
    autem fugit beatae quae voluptas!`
  },
  {
    id:'a2',
    category: 'shoes',
    subCategory: 'Sandlas with lacing',
    label: 'Top',
    price: '70.00',
    oldPrice: '90.00',
    imageSrc: ['2', '2-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Karan",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:3,
      reviewersName:"Ekam",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:5,
      reviewersName:"Aman",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:5,
      reviewersName:"Aman",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    }
  ],
    description:''
  },
  {
    id:'a3',
    category: 'clothing',
    subCategory: 'Paper bag trousers',
    label: '',
    price: '60.00',
    oldPrice: '',
    imageSrc: ['3', '3-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating:  [
      {
      reviewRatingStar:3,
      reviewersName:"Davinder",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:2,
      reviewersName:"Mehak",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:3,
      reviewersName:"Fateh",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    }
  ],
    description:''

  },


  {

    id:'a4',
    category: 'handbags',
    subCategory: 'Bucket bag',
    label: '',
    price: '350.00',
    oldPrice: '',
    imageSrc: ['4', '4-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating: [
      {
      reviewRatingStar:2,
      reviewersName:"Navjeet Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:2,
      reviewersName:"Rajveer Kaur",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    },
      {
      reviewRatingStar:3,
      reviewersName:"Inderjeet Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time:new Date().getTime()
    }
  ],
    description:''
  },
  {
    id:'a5',
    category: 'clothing',
    subCategory: 'Silk-blended kaftan',
    label: 'new',
    price: '370.00',
    oldPrice: '',
    imageSrc: ['5', '5-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    
    quantity:'1',
    stockStatus:'in stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Harsimran",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:4,
      reviewersName:"Sukhraas",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:3,
      reviewersName:"Prabhgeet",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    }
  ],
    description:''
  },
  {
    id:'a6',
    category: 'Sandles',
    subCategory: 'Spring sandlas',
    label: '',
    price: '59.00',
    oldPrice: '',
    imageSrc: ['6', '6-2'].map((n) => { return `../../../../assets/images/demos/demo-12/products/product-${n}.jpg` }),
    
    quantity:'1',
    stockStatus:'out of stock',
    reviews_rating: [
      {
      reviewRatingStar:4,
      reviewersName:"Kulveer Kaur",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:5,
      reviewersName:"Sukhjiner Singh",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    },
      {
      reviewRatingStar:3,
      reviewersName:"Karan",
      reviewlikes:0,
      reviewdislikes:0,
      time:0,
    }
  ],
    description:''
  }
  ]


  width = 0
  getTotalReviewsAvg() {
    debugger
   this.productList.map((n:any)  => {})
    
  }
}

