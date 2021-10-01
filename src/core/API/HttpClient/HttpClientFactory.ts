import { AppError } from './../../types/errors';
import ILogger from '../../services/Logger/ILogger';
import IConfig from '../../services/Configuration/IConfig';
import axios, { AxiosError, AxiosInstance } from "axios";
export class HttpClientFactory {
    constructor(private logger: ILogger, private config: IConfig) { }
    create(): AxiosInstance {

        const httpClient = axios.create({
            baseURL: this.config.Get("serverUrl"),
        });
        // add request interceptors 
        this.addRequestInterceptor(httpClient);
        // Add a response interceptor
        httpClient.interceptors.response.use(function (response) {
            return response;
        }, (error: AxiosError) => {
            // if(error.code?.includes("5")){
            const appError = new AppError(error.code || error.name, error.message);
            console.log(error);
            this.logger.showError(appError);
            // }
            return Promise.reject(error);
        });
        return httpClient;
    }

    addRequestInterceptor(client: AxiosInstance,): AxiosInstance {
        client.interceptors.request.use((request) => {
            request.headers["x-api-owner"] = "kido-dem-26123158"; // sould come from the cookie
            return request;
        }, (err: AxiosError) => {
            const appError = new AppError("cannot send reponse", err.message);
            this.logger.showError(appError);
            return Promise.reject(err);
        });
        return client;
    }
}