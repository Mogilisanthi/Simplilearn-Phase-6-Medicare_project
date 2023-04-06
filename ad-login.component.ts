import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';


@Component({
  selector: 'app-ad-login',
  templateUrl: './ad-login.component.html',
  styleUrls: ['./ad-login.component.css']
})
export class AdLoginComponent  implements OnInit {


  isSubmitted= false;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:AdminserviceService) { }



  ngOnInit(): void {
  }

  admin={
    ad_id:'',
    ad_email:'',
    ad_password:'',

  }
  //add record
  checkAdmin():void{
    const data={
      ad_id:this.admin.ad_id,
      ad_email:this.admin.ad_email,
      ad_password:this.admin.ad_password,
    }
     
    if(!data.ad_id){
      alert('please provide your ID');
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
    //get admin
    
    
    this.service.getAdminByEmail(this.admin.ad_id)
    .subscribe(data => {
      console.log(data.ad_email+","+data.ad_password+","+this.admin.ad_email+","+this.admin.ad_password); //You will get all your admin related information in this field
      
      if((data.ad_email==this.admin.ad_email)&&(data.ad_password==this.admin.ad_password)){
        alert("Welcome !"+data.ad_name);
      }
      else{
        alert("Wrong Email Id and Password");

      }
    });
    this.router.navigate(['adminlist'])
    
  }
  
}
