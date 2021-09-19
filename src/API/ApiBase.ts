import { AxiosInstance } from "axios";
import { ModelBase } from '../models/ModelBase';
import { ModelFactoryBase } from "../models/ModelFactoryBase";
import { QueryParamBuilder } from "./QueryParamBuilder";
export type QueryOptionsBase = {};

export abstract class ApiBase<T extends ModelBase, TOptions extends QueryOptionsBase> {
    protected abstract baseUrl: string;
    protected abstract factory: ModelFactoryBase<T>;
    constructor(protected httpClient: AxiosInstance) { }

    public async getMany(queryOptions: any): Promise<T[]> {
        const query = queryOptions ? QueryParamBuilder.buildFromOptions(queryOptions) : "";
        const response = await this.httpClient.get(this.baseUrl + "?" + query);
        const shops = this.factory.createMany(response.data);
        return shops;
    }

    public async getSingle(kid: string) {
        const response = await this.httpClient.get(this.baseUrl + kid);
        const shop = this.factory.createSingle(response.data);
        return shop;
    }
}