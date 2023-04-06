import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminClass } from './admin-class';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  url:string="http://localhost:8083/api/admin/";

  //inject the DI
  constructor(private http:HttpClient) { }

  //get all Admin
  getAllAdmin():Observable<AdminClass[]>{
    return this.http.get<AdminClass[]>(this.url);
  }
 
  //get Admin by id
  getAdminById(ad_id:number):Observable<AdminClass>{
    return this.http.get<AdminClass>(this.url+ad_id);
  }
  //get Admin by email
  getAdminByEmail(ad_email:string):Observable<AdminClass>{
    return this.http.get<AdminClass>(this.url+ad_email);
  }
  //create record
  create(data:any ):Observable<any>{
    return this.http.post(this.url,data).pipe();
  }
  //deleteById
  deleteById(ad_id:number){
    let myid=ad_id;
    this.http.delete(this.url+myid).subscribe((data: any)=>{
      return this.getAllAdmin();
    });
  }

  //update Admin
  updateAdmin(cust:AdminClass,ad_id:number){
    return this.http.put(this.url+ad_id,cust);
  }
  
}
