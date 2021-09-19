import { ModelBase } from "../ModelBase";
import { Shop } from "../Shop/Shop";

export class Owner extends ModelBase{
    shops:Shop [];
    name: string;
    email:string;
    kid: string;
    identity_id:string;
    elastic_id:string;
}