import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit {

  constructor(private cservice:CartserviceService,private router: Router,private activatedroute:ActivatedRoute) { }

  cart:Cart=new Cart();
  carts!:Cart[];  
  userName:string=Userdata.username;
  totalamt:string=Userdata.totalamt.toFixed(2);
  ordernum!:number; 

  ngOnInit(): void {
    Userdata.orderno= Math.floor(Math.random() * 100000)+1;
    this.ordernum=Userdata.orderno; 
    this.cservice.getCart().subscribe(data=>{this.carts=data;});

  }

  pay(){
    if (this.userName!='guest'){
      for(let i=0; i<(this.carts.length);i++){
        if(this.carts[i].username==this.userName && this.carts[i].payment=="notpaid"){
          let date: Date = new Date();
          this.cart.dateofpurchase=String(date);
          this.cart.username=this.userName;
          this.cart.orderno= String(this.ordernum);
          this.cart.payment="paid";
  
          this.cservice.update(this.carts[i].cartid,this.cart).subscribe(data=>{});
        } 
      }
    
    }
    
    
  }
}
