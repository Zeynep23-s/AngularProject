import { getLocaleDayNames } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, KeyValueDiffers, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Guid } from "guid-typescript";

import { products } from "./model";
import { Model } from './model';

import { appItem } from './appitem';
import { toDo } from './toDo';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
todos:toDo[]= [
  new toDo(Guid.create(),"Kuş", false),
  new toDo(Guid.create(),"Kedi", false),
]

  
  onSubmit(form:NgForm){
    let todo=new toDo(Guid.create(),form.value.title,false);
    this.todos.push(todo);
    form.resetForm();
  }
  


onComplete(id:Guid){
  let todo=this.todos.filter(x=>x.id == id)[0];
  todo.isComplete=true;

}
onDelete(id:Guid){
  let todo=this.todos.filter(x=>x.id)[0];
  let index=this.todos.indexOf(todo,0);
  if(index > -1){
    this.todos.splice(index,1);
  }
  


  }
  title='Online Pet Shop';

  message=""
  constructor(){ }
  ngOnInit() {
    this.setItem();
    
  }

  model=new Model();
 
 
  addItem(value:string)
  {
 this.model.items.push({Uyeler:value})
 localStorage.setItem('todos', JSON.stringify(this.todos));
 
 
    }
 getItems() {
   return this.model.items;
 }
 
  
 setItem(){
   if(!localStorage.getItem('todos' )){
     localStorage.setItem('todos', JSON.stringify(this.todos));
   }
 }
products=products;
basket:Product[]=[];

decreaseAmount(product:Product): void{
  if(product.quantity==0) {
    return;
  }
product.quantity--;
if(product.quantity==0){
  let index=this.basket.indexOf(product);

  this.basket.splice(index,1);
}
}
increaseAmount(product:Product): void {
if(!this.basket.includes(product)) {
  this.basket.push(product);
}
{
product.quantity++;

}
}

product= [
  {
    id:1,
    name:'Köpek',
    quantity:0,
    photoPath:"assets/images/köp.jpg"
    
  },
  {
    id:2,
    name:'Kedi',
    quantity:0,
    photoPath:"assets/images/kedi.jpg"
  },
  {
    id:3,
    name:'Kaplumbağa',
    quantity:0,
    photoPath:"assets/images/kaplumbağa.jpg"
  },
  {
    id:4,
    name:'Kuş',
    quantity:5,
    photoPath:"assets/images/kuss.jpg"
  },
]; }


type Product= {
  id:number,
  name:string,
  quantity:number,
 
  
}

