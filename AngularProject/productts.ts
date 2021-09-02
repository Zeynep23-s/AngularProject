
import { Guid } from "guid-typescript";


export class productts{
    constructor(
        public id:Guid,
        public title:string,
        public isComplete:boolean

    ){   }
}
