import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';
import { UserClass } from '../user-class';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {

  cart:Cart=new Cart();
  carts!:Cart[];  


  userName:string=Userdata.name;
  check:boolean=true;
  

  
 
  ngOnInit(): void {
    
    this.cservice.getCart().subscribe(data=>{this.carts=data;this.calculate();});
    this.userName=Userdata.name
    if(this.userName==null){
      this.userName="guest";
      this.check=false;
    }
   
  }
 

  constructor(private cservice:CartserviceService,private router: Router,private activatedroute:ActivatedRoute) { }

  totalmrp!:string;
  discount!:string;
  totalamt!:string;

  totalmrp1!:number;
 

  calculate(){
    Userdata.totalamt=0;
    this.totalmrp1=0;
    for(let i=0; i<(this.carts.length);i++){
      if(this.carts[i].username==this.userName && this.carts[i].payment=='notpaid'){
        this.totalmrp1+=Number(this.carts[i].totalprice);
     
      } 
    }
    this.totalmrp=(this.totalmrp1).toFixed(2)

    this.discount=(this.totalmrp1*15/100).toFixed(2);
    this.totalamt=(this.totalmrp1).toFixed(2)

    Userdata.totalamt=this.totalmrp1;

  }

  remove(id:number){
    this.carts=this.carts.filter(c=>c.cartid!==id)
    this.cservice.delete(id).subscribe(data=>{})
  }


  qty!:number;
  totalPrice!:number
  

 changeqty(e:any,id:number){
    this.cart.qty=e.target.value;

    for(let i=0; i<(this.carts.length);i++){
      if(this.carts[i].cartid==id){
        let x=Number(this.carts[i].price)
        let y=Number(this.cart.qty)
        this.totalPrice=(x*y)
      } 
    }
    this.cart.totalprice=this.totalPrice
    
    this.cservice.updateqty(id,this.cart).subscribe(data=>{this.ngOnInit()});
    
 }


}
