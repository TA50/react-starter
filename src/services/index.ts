import { ShopApi } from './../API/ShopApi/ShopApi';

import { CommonDispatcher } from '../store/ducx/Common/Dispatcher/CommonDispatcher';
import Config from './Configuration/Config';
import Logger from './Logger/Logger';
import { MemoryStorageBasedService } from "./Storage/MemoryStorageBasedService";
import { AppError } from '../types';
import { HttpClientFactory } from '../API/HttpClient/HttpClientFactory';
import { OwnerApi } from '../API/OwnerApi/OwnerApi';
import { TransactionApi } from '../API/TransactionApi/TransactionApi';

export enum ServiceName {
    Logger = "Logger",
    Config = "Config",
    Storage = "Storage",
    CommonDispatcher = "CommonDispatcher",
    HttpClient = "HttpClient",
    OwnerApi="OwnerApi",
    ShopApi="ShopApi",
    TransactionApi="TransactionApi",
}


class IoCContainer {
    private serviceCollection: { [symbol: string]: any } = [];
    register<T>(symbol: ServiceName, service: T) {
        this.serviceCollection[symbol] = service;
    }
    get<T>(symbol: ServiceName): T {
        const service = this.serviceCollection[symbol];
        if (service) {
            return service as T;
        } else {
            throw new AppError("Service Error", "register the service first before using it");
        }
    }
}


const container = new IoCContainer();
// instantiate services
const storageService = new MemoryStorageBasedService();
const configService = new Config();
const commonDispatcher = new CommonDispatcher();
const logger = new Logger(commonDispatcher);

// Api
const httpClientFactory = new HttpClientFactory(logger, configService); 
const httpClient = httpClientFactory.create();
const ownerApi = new OwnerApi(httpClient);
const shopApi = new ShopApi(httpClient);
const transactionApi= new TransactionApi(httpClient);
// Register services
container.register(ServiceName.CommonDispatcher, commonDispatcher);
container.register(ServiceName.Storage, storageService);
container.register(ServiceName.Config, configService);
container.register(ServiceName.Logger, logger);
container.register(ServiceName.HttpClient, httpClient);
container.register(ServiceName.OwnerApi, ownerApi);
container.register(ServiceName.ShopApi, shopApi);
container.register(ServiceName.TransactionApi, transactionApi);

export { container };