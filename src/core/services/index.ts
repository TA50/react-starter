import { FeedbackService } from './Feedback/FeedbackService';

import { CommonDispatcher } from '../store/ducx/Common/Dispatcher/CommonDispatcher';
import Config from './Configuration/Config';
import Logger from './Logger/Logger';
import { MemoryStorageBasedService } from "./Storage/MemoryStorageBasedService";
import { HttpClientFactory } from '../API/HttpClient/HttpClientFactory';

import { ServiceName} from './ServiceName';
import { IoCContainer } from './IoCContainer';
import { TodoApi } from '../API/TodoApi/TodoApi';

const container = IoCContainer.getInstance();
/******* instantiate services ********/

// Store
const commonDispatcher = new CommonDispatcher();
// const dataDispatcher  = new DataDispatcher();

// General
const logger = new Logger(commonDispatcher);
const configService = new Config();
const storageService = new MemoryStorageBasedService();
const feedbackService = new FeedbackService(commonDispatcher);

// Api
const httpClientFactory = new HttpClientFactory(logger, configService); 
const httpClient = httpClientFactory.create();
const todoApi = new TodoApi(httpClient);

/***** Register services *******/
// Store
container.register(ServiceName.CommonDispatcher, commonDispatcher);

// General
container.register(ServiceName.Storage, storageService);
container.register(ServiceName.Config, configService);
container.register(ServiceName.Logger, logger);
container.register(ServiceName.FeedbackService, feedbackService);

// Api 
container.register(ServiceName.HttpClient, httpClient);
container.register(ServiceName.TodoApi, todoApi)
export { container };

export * from "./types";
export * from "./ServiceName";