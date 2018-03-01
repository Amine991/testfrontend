import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions,Headers } from '@angular/http';
import { AppModel } from './app.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AppService {

private endpointUrl ="http://10.101.8.193:5000/api/product";  

  constructor(private http:Http) { 
   
  }
  
   getProducts(): Observable<AppModel[]> {
    return this.http.get(this.endpointUrl+"/1" )
                    .map((response: Response) => {
                      const result = response.json();
                      return result;
                    })
                    .catch((error : Response | any) => {
                       console.log(error.statusText);
                       return Observable.throw(error.statusText);
                    });
  }

  createProduct(obj:{}): Observable<AppModel> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
console.info(obj);
    return this.http.post(this.endpointUrl, obj , options)
                     .map((response: Response) => {
                      const result = response.json();
                      return result;
                    })
                    .catch((error : Response | any) => {
                       console.log(error.statusText);
                       return Observable.throw(error);
                    });
  }

  updateProduct(obj) : Observable<number>
  {  
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.endpointUrl + "/"+obj.id, obj)  
    .map((response: Response) => {
      const result = response.json();
      return result;
    }).catch((error : Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
   });
       
}  


deleteProduct(id) {  
  return this.http.delete(this.endpointUrl + "/" + id)  
      .map((response: Response) => {
        const result = response.json();
        return result;
      }).catch((error : Response | any) => {
        console.log(error.statusText);
        return Observable.throw(error);
     });
      
      
       
}




}
