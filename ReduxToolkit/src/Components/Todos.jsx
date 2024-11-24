import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-700 px-4 py-4 rounded"
                        key={todo.id}
                    >
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
