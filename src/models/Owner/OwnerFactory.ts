import { ModelFactoryBase } from "../ModelFactoryBase";
import { Shop } from "../Shop/Shop";
import { Owner } from "./Owner";
import { ShopFactory } from '../Shop/ShopFactory';

export class OwnerFactory extends ModelFactoryBase<Owner>{
    public createSingle(obj: any) {
        const owner = new Owner();
        owner._id = this.getValue<string>(obj, "_id");
        owner.createdAt = this.getValue<Date>(obj, "createdAt");
        owner.updatedAt = this.getValue<Date>(obj, "updatedAt");
        const shops = this.getValue<Shop[]>(obj, "shops");
        owner.shops = new ShopFactory().createMany(shops);
        owner.name = this.getValue(obj, "name");
        owner.email = this.getValue(obj, "email");
        owner.kid = this.getValue(obj, "kid");
        owner.identity_id = this.getValue(obj, "identity_id");
        owner.elastic_id = this.getValue(obj, "elastic_id");

        return owner;
    }

  
}