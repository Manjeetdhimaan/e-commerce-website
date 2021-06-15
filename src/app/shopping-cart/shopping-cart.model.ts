
export class ShoppingCart {
    public imageSrc: string;
    public title: string;
    public price: any;
    public quantity: any;

    
  
    constructor(imageSrc: string, title: string, price: any, quantity:any) {
        this.imageSrc = imageSrc;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }
  }
  