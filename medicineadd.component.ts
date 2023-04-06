import { Component, OnInit } from '@angular/core';
import { MedicareService } from '../medicare.service';

@Component({
  selector: 'app-medicineadd',
  templateUrl: './medicineadd.component.html',
  styleUrls: ['./medicineadd.component.css']
})
export class MedicineaddComponent implements OnInit {
  isSubmitted= false;
  constructor(private service:MedicareService) { }
  ngOnInit(): void {
    
  }
  medicine={
    name:'',
    description:'',
    category:'',
    price:'',

  }
  // add medicine
  addMedicine(){
    const data={
      name:this.medicine.name,
      description:this.medicine.description,
      category:this.medicine.category,
      price:this.medicine.price
    }
    if(!data.name){
      alert("medicine name shouls not be empty");
      return;
    }
    if(!data.description){
      alert("medicine description shouls not be empty");
      return;
    }
    if(!data.category){
      alert("medicine category shouls not be empty");
      return;
    }
    if(!data.price){
      alert("medicine price shouls not be empty");
      return;
    }
    this.service.create(data).subscribe(
      response=>{ console.log(response);
        this.isSubmitted=true},
        error=>{console.log(error);}

    )
  }
  

}
