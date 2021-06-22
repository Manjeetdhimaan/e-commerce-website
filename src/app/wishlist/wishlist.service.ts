
export class WishlistService {

  private wishList: any[] = [

  ]

  public data: any;
  public Json: any;
  public userToken: any;

  constructor() {
    this.data = localStorage.getItem('wishListData')
    console.log(this.data)
    this.Json = JSON.parse(this.data);
    this.wishList = this.Json
    console.log(this.Json)
  }


  getWishListItem() {
    return this.wishList.slice();
  }


  deleteWishListItem(index: number) {
    this.wishList.splice(index, 1)
    localStorage.setItem('wishListData', JSON.stringify(this.wishList))
  }


  onAddItemToWishList(item: any) {
    if (this.wishList.some(obj => obj.id === item.id)) {
      this.wishList.push()
    }
    else {
      this.wishList.push(item)
    }
    localStorage.setItem('wishListData', JSON.stringify(this.wishList))
  }
}