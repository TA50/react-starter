import { ModelFactoryBase } from "../ModelFactoryBase";
import { Transaction } from "../Transaction/Transaction";
import { Shop } from "./Shop";
import { TransactionFactory } from '../Transaction/TransactionFactory';
import { Layouts } from '../../constants/Layouts';

export class ShopFactory extends ModelFactoryBase<Shop>{

    public createSingle(obj: any): Shop {
        const shop = new Shop();
        shop._id = this.getValue<string>(obj, "_id");
        shop.createdAt = this.getValue<Date>(obj, "createdAt");
        shop.updatedAt = this.getValue<Date>(obj, "updatedAt");

        shop.classic_coffee_price = this.getValue<number>(obj, "classic_coffee_price");
        shop.specialty_coffee_price = this.getValue<number>(obj, "specialty_coffee_price");
        const transactions = this.getValue<Transaction[]>(obj, "transactions");
        shop.transactions = new TransactionFactory().createMany(transactions);
        shop.name = this.getValue<string>(obj, "name");
        shop.email = this.getValue<string>(obj, "email");
        shop.layout = this.getValue<Layouts>(obj, "layout");
        shop.kid = this.getValue<string>(obj,"kid");
        shop.identity_id = this.getValue<string>(obj,"identity_id");
        shop.latitude = this.getValue<number>(obj,"latitude");
        shop.longitude = this.getValue<number>(obj,"longitude");
        shop.elastic_id = this.getValue<string>(obj,"elastic_id");
        shop.closing_time = this.getValue<number>(obj,"closing_time");
        shop.emirate = this.getValue<string>(obj,"emirate");
        shop.instagram_url = this.getValue<string>(obj,"instagram_url");
        shop.opening_time = this.getValue<number>(obj,"opening_time");
        shop.phone_number = this.getValue<string>(obj,"phone_number");
        shop.state = this.getValue<string>(obj,"state");
        return shop;
    }
   

}