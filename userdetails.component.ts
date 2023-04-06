import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../userservice.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:DataserviceService) { }

  user!: UserClass;
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getUserById(Number(id)).subscribe(data=>this.user=data);
  }
  

}
