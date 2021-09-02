import { FormGroupDirective } from "@angular/forms";
import { Guid } from "guid-typescript";

export class toDo{
    constructor(
        public id:Guid,
        public title:string,
        public isComplete:boolean

    ){ }
}
