import { ModelFactoryBase } from '../ModelFactoryBase';
import { Todo } from './Todo';
export class TodoFactory extends ModelFactoryBase<Todo>{
    public createSingle(obj: any): Todo {
        const todo = new Todo();
        todo.completed = this.getValue(obj, "completed");
        todo.id = this.getValue(obj, "id");
        todo.title = this.getValue(obj, "title");
        todo.userId = this.getValue(obj, "userId");
        return todo;
    }
}