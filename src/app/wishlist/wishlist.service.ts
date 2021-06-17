
export class WishlistService {

private wishList:any[]=[
    {
        id: 'a',
        imgSrc: 'assets/images/products/table/product-1.jpg',
        title: 'Beige knitted elastic runner shoes',
        price: '84.00',
        stockStatus: 'In stock'
      },
      {
        id: '2',
        imgSrc: 'assets/images/products/table/product-2.jpg',
        title: 'Blue utility pinafore denim dress',
        price: '76.00',
        stockStatus: 'In stock'
      },
      {
        id: '3',
        imgSrc: 'assets/images/products/table/product-3.jpg',
        title: 'Orange saddle lock front chain cross body bag',
        price: '52.00',
        stockStatus: 'Out of stock'
      }
]

    constructor(){ }


    
    getWishListItem(){
       return this.wishList.slice();
       
    }
    deleteWishListItem(index:number){
        this.wishList.splice(index,1)
      }
     
      
}