import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminClass } from '../admin-class';
import { AdminserviceService } from '../adminservice.service';


@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  admin!: AdminClass;
  ad_id!: string | null;
  registerForm!: FormGroup;
  submitted:boolean=false;
  constructor(private service:AdminserviceService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.ad_id=this.activatedroute.snapshot.paramMap.get('ad_id');
    this.service.getAdminById(Number(this.ad_id)).subscribe(x=>this.admin=x);

    this.registerForm=this.builder.group({
      ad_name:['',Validators.required],
      ad_email:['',Validators.required,Validators.email],
      ad_login:['',Validators.required],
      ad_password:['',Validators.required],

    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      {
        this.service.updateAdmin(this.admin,Number(this.ad_id)).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['adminlist'])
      }
  }

}
