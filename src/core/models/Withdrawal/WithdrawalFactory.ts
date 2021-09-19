import { ModelFactoryBase } from "../ModelFactoryBase";
import { Withdrawal } from "./Withdrawal";

export class WithdrawalFactory extends ModelFactoryBase< Withdrawal>{
    public createSingle(obj:any) {
        const withdrawal = new  Withdrawal();
        withdrawal._id = this.getValue<string>(obj,"_id");
        withdrawal.createdAt = this.getValue<Date>(obj,"createdAt");
        withdrawal.updatedAt = this.getValue<Date>(obj,"updatedAt");
        withdrawal.date =this.getValue(obj,"date"); 
        withdrawal.status=this.getValue(obj,"status"); 
        withdrawal.owner_id = this.getValue(obj,"owner_id");
        withdrawal.req_id = this.getValue(obj,"req_id");
        withdrawal.total = this.getValue(obj,"total");
        return withdrawal;
    }

}