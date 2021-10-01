import { TodoFactory } from './../../models/Todo/TodoFactory';
import { Todo } from './../../models/Todo/Todo';
import { ApiBase } from '../ApiBase';
export class TodoApi extends ApiBase<Todo, {}>{ 
    protected baseUrl = "todos"
    protected factory = new TodoFactory();
}