import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  url:string="http://localhost:8083/api/user/";

  //inject the DI
  constructor(private http:HttpClient) { }

  //get all users
  getAllUser():Observable<UserClass[]>{
    return this.http.get<UserClass[]>(this.url);
  }
 
  //get user by id
  getUserById(id:number):Observable<UserClass>{
    return this.http.get<UserClass>(this.url+id);
  }
  //get user by email
  getUserByEmail(email:string):Observable<UserClass>{
    return this.http.get<UserClass>(this.url+email);
  }
  //create record
  create(data:any ):Observable<any>{
    return this.http.post(this.url,data).pipe();
  }
  //deleteById
  deleteById(id:number){
    let myid=id;
    this.http.delete(this.url+myid).subscribe((data: any)=>{
      return this.getAllUser();
    });
  }

  //update user
  updateUser(cust:UserClass,id:number){
    return this.http.put(this.url+id,cust);
  }
  
}