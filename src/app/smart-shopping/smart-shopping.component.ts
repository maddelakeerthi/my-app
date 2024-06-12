import { Component, OnInit } from '@angular/core';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-smart-shopping',
  templateUrl: './smart-shopping.component.html',
  styleUrls: ['./smart-shopping.component.css']
})
export class SmartShoppingComponent implements OnInit {
  public name:string='';
  public price:number=0;
  public rating:number=0;
  public sno:number=0;
  public freedelivery:boolean | undefined;

  public products:any=[
    {sno:1,productname:'pen',price:10,rating:3,freedelivery:'true'},
    {sno:2,productname:'phone',price:100,rating:2,freedelivery:'false'},
    {sno:3,productname:'shirt',price:400,rating:4,freedelivery:'true'},
    {sno:4,productname:'cap',price:200,rating:5,freedelivery:'false'},
    {sno:5,productname:'mobile case',price:300,rating:2,freedelivery:'true'},
    {sno:6,productname:'remote',price:400,rating:2.5,freedelivery:'false'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  addcart(){
    let product:any={
     sno:this.sno,
    productname:this.name,
    price:this.price,
    rating:this.rating,
    freedelivery:this.freedelivery,

    }
    this.products.push(product);
    this.name=" ";
    this.price=0;
    this.rating=0;
    
  }
  
  delete(i:number){
    this.products.splice(i,1);
  }
  deliverycharges(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+50;

      return product;
    });
  }

  total(){
    let totalprice=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalprice);
  }

  cartitems(){
    let length:any=this.products.length;
    alert(length);
  }
}


