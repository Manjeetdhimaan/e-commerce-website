export class ProductDetailService {

    productdetail = [{}]

    getProductDetail() {
        return this.productdetail.slice();
    }

    getProductDetailtem(item: any) {
        this.productdetail = []
        this.productdetail.push(item);
    }
}