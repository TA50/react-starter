import {  ServiceName, ServiceError } from ".";

export class IoCContainer {
    private static _instance: IoCContainer|null;
    private constructor(){
    }
    static getInstance():IoCContainer {
        if(!this._instance)
            this._instance = new IoCContainer();

        return this._instance;
    }
    private serviceCollection: { [symbol: string]: any } = [];
    register<T>(symbol: ServiceName, service: T) {
            const oldService: T = this.serviceCollection[symbol];
            if(oldService){
                throw new ServiceError("duplicate service error", `you can only register one service per ServiceName\nServiceName: ${symbol}`);
            }else{
                this.serviceCollection[symbol] = service;
            }
    }
    get<T>(symbol: ServiceName): T {
        const service = this.serviceCollection[symbol];
        if (service) {
            return service as T;
        } else {
            throw new ServiceError("Service not found error", "register the service first before using it service needed: "+symbol);
        }
    }
}