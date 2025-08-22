import {product} from '../model/model';

export class ProductService {
    Products:product[] = [
    new product (1,"Apple iPhone 13 Pro",99,"Category A",2),
    new product (2,"Samsung Galaxy S21 Ultra",45,"Category B",0),
    new product (3,"OnePlus 9 Pro",646,"Category A",9),
    new product (4,"Google Pixel 6 Pro",465,"Category C",5),
    new product (5,"Huawei P50 Pro",34,"Category B",8),
    new product (6,"Xiaomi Mi 11",38,"Category C",0)
];


    getAllProducts(){
        return this.Products;
    }

}