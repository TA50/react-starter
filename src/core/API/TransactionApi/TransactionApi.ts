import { QueryOptionsBase } from './../ApiBase';
import { Transaction } from "../../models";
import { ApiBase } from "../ApiBase";
import { TransactionFactory } from '../../models/Transaction/TransactionFactory';
export type TransactionQueryOptions = QueryOptionsBase & {
    populate?: "transactions";
    sort?: string;
    limit?: string;
    page?: string;
}
export class TransactionApi extends ApiBase<Transaction, TransactionQueryOptions> {
    protected baseUrl = "/shop/api/admin/transaction/";
    protected factory = new TransactionFactory();
}