import { Component ,OnInit, Input } from '@angular/core';
import { AppModel } from './app.model';
import { AppService } from './app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  products = [];
  errorMsg :string;
  errorFlag: boolean = false;

  


  constructor(private appService:AppService  ,public toastr: ToastsManager ){
    
}

update(product:AppModel,newprice:number,
  newbrand:string,newname:string,newcatid:number,newndesc:string)
   {
  product.name=newname;
  product.price=newprice;
  product.brand=newbrand;
  product.description=newndesc;
  product.categoryid=newcatid;
  this.appService.updateProduct(product)
  .subscribe(
             (product)  => {this.products.push(product)
          
             }
            );
            }


    fetchProductData() {
    this.appService.getProducts()
     .subscribe(  
                  (data: AppModel[]) => {  this.products = data; },
                 (error) =>  {this.errorMsg = error; this.errorFlag = true}
                )
            
    }

   delete(Id) {  
      var ans = confirm("Do you want to delete product with Id: " + Id);  
      if (ans) {  
          this.appService.deleteProduct(Id).subscribe((data) => {  
              this.fetchProductData();  
          }, error => console.error(error))   
      }  
  } 
    addProduct(product: AppModel) {
      
    this.appService.createProduct(product)
                   .subscribe(
                              (product)  => {this.products.push(product)},
                              (error) =>  {this.errorMsg = error
                              }
                              
                              

                     );                                

                     
}
 
  ngOnInit(){
    this.fetchProductData(); 
  }
  
}
