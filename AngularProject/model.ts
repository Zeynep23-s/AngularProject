import { style } from "@angular/animations";
import { stringify } from "@angular/compiler/src/util";
import { appItem } from "./appitem";

export class Model {

    name:string;
    items:appItem[];

    constructor() {
        this.name="";
        this.items=[
            {Uyeler:"Fatih Kay -Kuş ve Köpek"},
            {Uyeler:"Selin Say -Köpek"},
            {Uyeler:"Şule Soy  -Kaplumbağa"},
          
        ]
   
    
    }
    
}


const m=new Model();

export const products=[
    {
    id:1,
    name:"Köpek",
    quantity:0,
    photoPath:"assets/images/köp.jpg"

    },
    {
        id:2,
        name:"Kedi",
        quantity:0,
        photoPath:"assets/images/kedi.jpg"
    },
    {
        id:3,
        name:"Kaplumbağa",
        quantity:0,
        photoPath:"assets/images/kap.jpg"
    },
{
    id:4,
    name:"Kuş",
    quantity:0,
    photoPath:"assets/images/kuş.jpg" 
    
}
]
