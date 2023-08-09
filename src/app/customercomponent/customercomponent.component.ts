
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customercomponent',
  templateUrl: './customercomponent.component.html',
  styleUrls: ['./customercomponent.component.css']
})
export class CustomercomponentComponent   {
data:any=[];
pageSize = 5;
imgurl='src/assets/user_img.png';
term:any='';
constructor(){
  
    this.data=[
    {
     "firstname": "Ted",
     "lastname": "James",
     "address": "1234 ANyWhere st.",
     "city": "Phonix",
     "state": "Anzona",
     "ordertotal":"$207.98"
   },
   {
     "firstname": "Michelle",
     "lastname": "Thompson",
     "address": "345 Ceder Point Ave.",
     "city": "Encitivs",
     "state": "Calfornia",
     "ordertotal":"$8.98"
   }
  ]

}


}
