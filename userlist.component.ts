import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../userservice.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private router:Router, private service:DataserviceService) { }
  users!:UserClass[];


  ngOnInit(): void {
    this.service.getAllUser().subscribe(result=>this.users=result);
  }
  DeleteUserById(id:number){
    //refresh the list once user is deleted
    this.users=this.users.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("user Deleted");
  }

}
