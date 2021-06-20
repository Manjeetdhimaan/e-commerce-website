
export class WishlistService {

private wishList:any[]=[
   
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