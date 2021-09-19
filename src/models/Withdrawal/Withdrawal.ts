import { ModelBase } from "../ModelBase";

export class Withdrawal extends ModelBase{ 
    owner_id: string;
    req_id:string;
    status:string;
    total: string;
    date: Date;
}