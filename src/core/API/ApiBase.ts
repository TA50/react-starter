import { AxiosInstance } from "axios";
import { ModelBase } from '../models/ModelBase';
import { ModelFactoryBase } from "../models/ModelFactoryBase";
import { QueryOptionsBase } from "./QueryOptionsBase";
import { QueryParamBuilder } from "./QueryParamBuilder";


export abstract class ApiBase<T extends ModelBase, TOptions extends QueryOptionsBase> {
    protected abstract baseUrl: string;
    protected abstract factory: ModelFactoryBase<T>;
    constructor(protected httpClient: AxiosInstance) { }

    public async getMany(queryOptions?: TOptions): Promise<T[]> {
        
            const query = queryOptions ? QueryParamBuilder.buildFromOptions(queryOptions) : "";
            const response = await this.httpClient.get(this.baseUrl + "?" + query);
            const items = this.factory.createMany(response.data);
            return items;
        
    }

    public async getSingle(kid: string) {
        const response = await this.httpClient.get(this.baseUrl + "/" + kid);
        const item = this.factory.createSingle(response.data);
        return item;
    }

    protected async update(kid: string, item: T) {
        const response = await this.httpClient.put(this.baseUrl + "/" + kid, item);
        const result = this.factory.createSingle(response.data);
        return result;
    }
}