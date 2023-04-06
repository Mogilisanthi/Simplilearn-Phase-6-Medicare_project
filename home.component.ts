import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { MedicareService } from '../medicare.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Userdata } from '../userdata';
import { MedicineClass } from '../medicine-class';
import { Cart } from '../cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private cservice:CartserviceService,private service:MedicareService,private router: Router,private activatedroute:ActivatedRoute) { }

  userName:string=Userdata.username;
  check:boolean=true;
  medicines!: MedicineClass[];
  cart:Cart=new Cart();


 
  ngOnInit(): void {
    this.userName=Userdata.username
    if(this.userName==null){
      this.userName="guest";
      this.check=false;
    }
  
    this.service.getAllMedicine().subscribe(data=>{this.medicines=data });
  }

  

  searchtext:string="";

  

  opencart(){
    
      this.router.navigate(["/addcart"]);
    
  
  }


  
    }
    



