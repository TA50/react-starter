import ILogger from '../../services/Logger/ILogger';
import IConfig from '../../services/Configuration/IConfig';
import axios, {AxiosInstance} from "axios";
export class HttpClientFactory {
    constructor(private logger: ILogger, private config: IConfig) { }
    create(): AxiosInstance {

        const httpClient = axios.create({
            baseURL: this.config.Get("serverUrl"),
        });
        return httpClient;
    }
}