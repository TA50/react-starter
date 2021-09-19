import { AxiosInstance } from "axios";
import { Owner, OwnerFactory } from "../../models";
import { ApiBase } from "../ApiBase";
import { QueryParamBuilder } from "../QueryParamBuilder";
export type OwnerQueryOptions = {
    email?: string; populate?: "shops"; sort?: string; limit?: string; page?: string;
}
export class OwnerApi extends ApiBase<Owner, OwnerQueryOptions> {
    protected baseUrl = "/shop/api/admin/owner/";
    protected factory  = new OwnerFactory();
    
}