import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {


  isSubmitted= false;
  constructor(private service:AdminserviceService,private router:Router) { }


  ngOnInit(): void {
  }

  admin={
    ad_name:'',
    ad_password:'',
    ad_email:'',
    ad_login:'',

  }
  //add record
  addAdmin():void{
    const data={
      ad_name:this.admin.ad_name,
      ad_email:this.admin.ad_email,
      ad_password:this.admin.ad_password,
      ad_login:this.admin.ad_login,
    }
    if(!data.ad_name){
      alert('please provide name');
      return;
    }
    if(!data.ad_email){
      alert('please provide email');
      return;
    }
    if(!data.ad_password){
      alert('please provide password');
      return;
    }
    

     
     this.service.create(data).subscribe(
      response=>{ console.log(response);
      this.isSubmitted=true},
      error=>{console.log(error);}
     )
     this.router.navigate(['adminlogin'])
  }
}

