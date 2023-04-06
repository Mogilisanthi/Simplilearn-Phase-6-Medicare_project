import { Component, OnInit } from '@angular/core';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  orderno:number=Userdata.orderno;
  ngOnInit(): void {
  }

}
