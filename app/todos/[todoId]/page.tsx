import axios from 'axios';
import { Todo } from 'typings';

type PageProps = {
    params: {
        todoId: string;
    };
};


const axiosTodo = async (todoId: string) => {
    const todo: Todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((res) => res.data);

    return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
    const todo = await axiosTodo(todoId);
    return (
        <div className="m-2 border-2 bg-yellow-200 p-10 shadow-lg">
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            <p className="nt-5 border-t border-black text-right">By User: {todo.userId}</p>
        </div>
    );
};

export default TodoPage;

export const generateStaticParams = async () => {
    const todos: Todo[] = await axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => res.data);
    console.log(todos);

    return todos.map((todo) => ({
        todoId: todo.id.toString(),
    }));

    // [ { todoId: '1' }, { todoId: '2' }, ...]
};
