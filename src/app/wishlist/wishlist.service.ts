
export class WishlistService {

private wishList:any[]=[
    {
        id: '1',
        imageSrc: 'assets/images/products/table/product-1.jpg',
        subCategory: 'Beige knitted elastic runner shoes',
        price: '84.00',
        stockStatus: 'In stock',
        quantity:'1'
      },
      {
        id: '2q',
        imageSrc: 'assets/images/products/table/product-2.jpg',
        subCategory: 'Blue utility pinafore denim dress',
        price: '76.00',
        stockStatus: 'In stock',
        quantity:'1'
      },
      {
        id: '3q',
        imageSrc: 'assets/images/products/table/product-3.jpg',
        subCategory: 'Orange saddle lock front chain cross body bag',
        price: '52.00',
        stockStatus: 'Out of stock',
        quantity:'1'
      }
]

    constructor(){ }


    
    getWishListItem(){
       return this.wishList.slice();
       
    }
    deleteWishListItem(index:number){
        this.wishList.splice(index,1)
      }
     onAddItemToWishList(item:any){
      if (this.wishList.some(obj => obj.id === item.id)) {
        this.wishList.push()
      }
      else {
        this.wishList.push(item)
      }
     }
}