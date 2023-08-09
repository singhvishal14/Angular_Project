import { Component } from '@angular/core';

@Component({
  selector: 'app-ordercomponent',
  templateUrl: './ordercomponent.component.html',
  styleUrls: ['./ordercomponent.component.css']
})
export class OrdercomponentComponent {

  data:any=[];
  data1:any=[];

  constructor(){
    this.data=[
      {
       "ordername": "Basketball",
       "amount": "$7.99"       
     },
     {
      "ordername": "Shoes",
      "amount": "$199.99"
     }
    ];
    this.data1=[
      {
       "ordername": "Frisbee",
       "amount": "$2.99"       
     },
     {
      "ordername": "Hat",
      "amount": "$5.99"
     }
    ];
   
  }
}
