import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineClass } from './medicine-class';

@Injectable({
  providedIn: 'root'
})
export class MedicareService {
  url:string="http://localhost:8083/api/medicine/";
  constructor(private http:HttpClient) { }
    //get all medicines
    medicineid:any;
    userlogin:any;
  getAllMedicine():Observable<MedicineClass[]>{
    return this.http.get<MedicineClass[]>(this.url);
  }
  //get Medicine by id
  getMedicineById(id:number):Observable<MedicineClass>{
    return this.http.get<MedicineClass>(this.url+id);
  }
  //get Medicine by name
  // getMedicineByName(name:string):Observable<MedicineClass>{
  //   return this.http.get<MedicineClass>(this.url+"name"+name);
  // }
  public getMedicineByName(name:any){
    return this.http.get(this.url+"name"+name);
  }
  //create record
  create(data:any ):Observable<any>{
    return this.http.post(this.url,data).pipe();
  }
  //deleteById
  deleteById(id:number){
    let myid=id;
    this.http.delete(this.url+myid).subscribe((data: any)=>{
      return this.getAllMedicine();
    });
  }

  //update medicine
  updateMedicine(cust:MedicineClass,id:number){
    return this.http.put(this.url+id,cust);
  }
  
}
  

