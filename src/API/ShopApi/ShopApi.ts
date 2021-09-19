import { Shop, ShopFactory } from "../../models";
import { ApiBase, QueryOptionsBase } from "../ApiBase";
import { QueryParamBuilder } from "../QueryParamBuilder";
export type ShopQueryOptions = QueryOptionsBase &{
    email?: string;
    populate?: "transactions";
    sort?: string;
    limit?: string;
    page?: string;
    estimate_location?:boolean;
    current_lat?: number;
    current_lng?: number;
}
export class ShopApi extends ApiBase<Shop, ShopQueryOptions> {
    protected baseUrl = "/shop/api/admin/shop/";
    protected factory = new ShopFactory();
   
}