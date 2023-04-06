import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminClass } from '../admin-class';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  constructor(private router:Router, private service:AdminserviceService) { }
  Admin:AdminClass[];


  ngOnInit(): void {
    this.service.getAllAdmin().subscribe(result=>this.Admin=result);
  }
  DeleteAdminById(ad_id:number){
    //refresh the list once admin is deleted
    this.Admin=this.Admin.filter(a=>a.ad_id!=ad_id);
    //delete admin
    this.service.deleteById(ad_id);
    console.log("admin Deleted");
  } 

  

}
