import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicareService } from '../medicare.service';
import { MedicineClass } from '../medicine-class';
import { DataserviceService } from '../userservice.service';


@Component({
  selector: 'app-medicine',

  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  constructor(private router:Router, private service:MedicareService,private uservice:DataserviceService) { }
  medicine:MedicineClass[];
  
  searchText:any;

  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result=>this.medicine=result);
  }
  DeleteMedicineById(id:number){
     //refresh the list once medicine is deleted
     this.medicine=this.medicine.filter(c=>c.id!=id);
     //delete medicne
     this.service.deleteById(id);
     console.log("Medicine Deleted");
   }
 
   
}
