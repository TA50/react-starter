import { AxiosInstance } from "axios";
import { Owner, OwnerFactory } from "../../models";
import { ApiBase } from "../ApiBase";
import { QueryParamBuilder } from "../QueryParamBuilder";
import { DataDispatcher } from '../../store/ducx/Data/DataDispatcher';
export type OwnerQueryOptions = {
    email?: string; populate?: "shops"; sort?: string; limit?: string; page?: string;
}
export class OwnerApi extends ApiBase<Owner, OwnerQueryOptions> {
    constructor(protected httpClient: AxiosInstance, private _dataDispatcher: DataDispatcher) {
        super(httpClient);
    }
    protected baseUrl = "/shop/api/admin/owner/";
    protected factory  = new OwnerFactory();

    public async getSingle(kid: string) {
        const item = await super.getSingle(kid);
        this._dataDispatcher.setOwner(item);
        return item;
    }
}