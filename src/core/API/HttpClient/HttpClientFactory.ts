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
        // Add a response interceptor
        httpClient.interceptors.response.use(function (response) {
            return response;
        }, (error:AxiosError) => {
            const appError = new AppError(error.code||error.name, error.message);
            this.logger.showError(appError);
            return Promise.reject(error);
        });
        return httpClient;
    }
}