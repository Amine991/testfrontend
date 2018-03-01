
export class AppModel {
  id:number;
  price:number;
  description:string;
  name:string;
  brand:string
  categoryid:number
  
  constructor(id:number,price:number, description:string, name:string,brand:string,categoryid:number) { 
 this.id=id;
    this.price = price;
    this.description = description;
    this.name  = name;
    this.brand=brand;
    this.categoryid=categoryid;
}
}
