export class model {


      constructor(){}
    
}

export class product{
    constructor(id:number, name: string,price:number, category: string, quantity:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
    id:number;
    name: string; 
    price:number; 
    category: string; 
    quantity:number;
}

export class UserDetail{
    constructor( name: string, password: string){
        this.name = name;
        this.password = password;
    }
    name: string; 
    password: string;

}

export class cartProduct{
    constructor(id:number, name: string,price:number, category: string, quantity:number, selectedQuantity:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
        this.selectedQuantity = selectedQuantity;
    }
    id:number;
    name: string; 
    price:number; 
    category: string; 
    quantity:number;
    selectedQuantity:number;
}