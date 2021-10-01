import { HeadCell} from '../../components/GenericTable';
import { Todo } from '../../core/models/Todo/Todo';
export const todoHeadCells : HeadCell<Todo>[] = [
{
    label : "userId", 
    select: t=> t.userId, 

},
{
    label: "title",
    select: t=> t.title, 

},
{
    label: "completed" ,
    select: t=> t.completed
}
]