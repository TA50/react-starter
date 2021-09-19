import { ModelFactoryBase } from "../ModelFactoryBase";
import { Transaction } from './Transaction';

export class TransactionFactory extends ModelFactoryBase<Transaction>  {
    public createSingle(obj: any): Transaction {
        const transaction = new Transaction();

        transaction._id = this.getValue(obj, "_id");
        transaction.createdAt = this.getDate(obj, "createdAt");
        transaction.updatedAt = this.getDate(obj, "updatedAt");

        transaction.classic_coffee_count = this.getValue<number>(obj, "classic_coffee_count");
        transaction.specialty_coffee_count = this.getValue(obj, "specialty_coffee_count");
        transaction.date = this.getDate(obj, "date");
        transaction.user_id = this.getValue(obj, "user_id");
        transaction.internal_correlation_id = this.getValue(obj, "internal_correlation_id");
        transaction.shop_id = this.getValue(obj, "shop_id");
        transaction.kid = this.getValue(obj, "kid");
        transaction.total_price = this.getValue(obj, "total_price");
        transaction.elastic_id = this.getValue(obj, "elastic_id");
        return transaction;
    }
   
}
