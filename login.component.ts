import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../userservice.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isSubmitted= false;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:DataserviceService) { }



  ngOnInit(): void {
  }

  user={
    id:'',
    password:'',
    email:'',

  }
  //add record
  checkUser():void{
    const data={
      id:this.user.id,
      email:this.user.email,
      password:this.user.password,
    }
     
    if(!data.id){
      alert('please provide your ID');
      return;
    }
    if(!data.email){
      alert('please provide email');
      return;
    }
    
    if(!data.password){
      alert('please provide password');
      return;
    }
    //get user
    
    //this.service.getUserByEmail(this.user.email);
    this.service.getUserByEmail(this.user.id)
    .subscribe(data => {
      console.log(data.email+","+data.password+","+this.user.email+","+this.user.password); //You will get all your user related information in this field
      
      if((data.email==this.user.email)&&(data.password==this.user.password)){
        alert("Welcome !"+data.name);
        
      }
      else{
        alert("Wrong Email Id and Password");

      }
    });
    this.router.navigate(['searchmedicine'])
    this.router.navigate(['medicinelist'])
  }
}

