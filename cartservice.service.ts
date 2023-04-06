import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  url:string="http://localhost:8083/api/cartandorder/";
  constructor(private http:HttpClient) { }

  //create  cart record
  addcart(data:any ):Observable<any>{
    return this.http.post(this.url,data).pipe();
  }
  //get all cart
  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.url);
  }
  //delete cart
  delete(id:number){
    
   return this.http.delete(this.url+id);
  }
    //update cart
    update(id:number,cart:Cart){
      return this.http.put(this.url+id,cart);
    }
    updateqty(id:number,cart:Cart){
      return this.http.put(this.url+"/updateqty/"+id,cart);
    }


}


