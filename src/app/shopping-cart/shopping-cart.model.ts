
export class ShoppingCart {
    public id:any;
    public imageSrc: string;
    public title: string;
    public price: any;
    public quantity: any;

    
  
    constructor(id:any ,imageSrc: string, title: string, price: any, quantity:any) {
        this.id=id;
        this.imageSrc = imageSrc;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
       
    }
  }
  