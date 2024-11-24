import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,

        }
    ],
    addTodo: (todod) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) =>{},
    toggleCOmplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider