import { useContext } from 'react'
import './css/TodoCounter.css'
import { TodoContext } from './TodoContext/TodoProvider'

function TodoCounter() {
    const {totalTodos,completedTodos} = useContext(TodoContext);
    return (
        <>
            <h2 className="TodoCounter-title">Has completado {completedTodos} de {totalTodos} Tareas</h2>
        </>
    )
}

export default TodoCounter
