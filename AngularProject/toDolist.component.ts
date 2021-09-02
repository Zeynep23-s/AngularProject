import { Component } from "@angular/core";
import {productts} from './productts';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";

@Component({ 
    selector:'toDolist',
    templateUrl: './toDolist.component.html',
    styleUrls:['./toDolist.component.css']


})
export class toDolistComponent {
    tosos:productts[]=[
        new productts(Guid.create(),"Köpek", false),
]
onSubmit(form:NgForm):void{
    let toso=new productts(Guid.create(),form.value.title, false);
    this.tosos.push(toso);
    form.resetForm();
    
    }

    onComplete(id:Guid){
        let toso=this.tosos.filter(x=>x.id == id)[0];
        toso.isComplete=true;
      }

    onDelete(id:Guid)
  {
  let toso=this.tosos.filter(x=>x.id)[0];
  let index=this.tosos.indexOf(toso,0);
  if(index > -1){
    this.tosos.splice(index,1);
  }
}
}
