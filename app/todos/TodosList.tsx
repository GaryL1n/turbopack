import axios from 'axios';
import Link from 'next/link';
import { Todo } from 'typings';

const axiosTodos = async () => {
    const todos: Todo[] = await axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => res.data);
    console.log(todos);
    return todos;
};

const TodosList = async () => {
    const todos = await axiosTodos();

    return (
        <>
            {todos.map((todo) => (
                <p key={todo.id}>
                    <Link href={`/todos/${todo.id}`} className="text-white">
                        Todo: {todo.id}
                    </Link>
                </p>
            ))}
        </>
    );
};

export default TodosList;
