import { Container, Paper, TableCell, TableRow } from '@mui/material';
import * as React from 'react';
import { GenericTable } from '../../components/GenericTable';
import Loader from '../../components/Loader/Loader';
import { container, ServiceName } from '../../core';
import { TodoApi } from '../../core/API/TodoApi/TodoApi';
import { Todo } from '../../core/models/Todo/Todo';
import { todoHeadCells } from "./headCells";
interface ITodoPageProps {
}

const TodoPage: React.FunctionComponent<ITodoPageProps> = (props) => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const todoApi = container.get<TodoApi>(ServiceName.TodoApi)
    React.useEffect(() => {
        todoApi.getMany().then(result => {
            setTodos([...result])
        })
    }, [])
    function createRow(todo: Todo) {

        return <TableRow>
            {todoHeadCells.map(head => {
                return <TableCell>
                    {head.select(todo)}
                </TableCell>
            })}
        </TableRow>
    }

    return (
        <Loader isLoading={todos.length == 0}>

            <Container component={Paper}>
                <GenericTable<Todo>
                    data={todos}
                    headCells={todoHeadCells}
                    rowTemplate={createRow}
                />
            </Container>
        </Loader>
    );
};

export default TodoPage;
