import { useContext, useState } from 'react'
import { TodoContext } from './TodoContext/TodoProvider';
import './css/TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form type="submit">
            <label> Escribe tu nueva tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe tu tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="
                    TodoForm-button
                    TodoForm-button--cancel
                    "
                >
                    Cancelar
                </button>
                <button
                    onClick={onAdd}
                    className="
                    TodoForm-button
                    TodoForm-button--add
                    "
                >
                    Añadir tarea
                </button>
            </div>
        </form>
    )
}

export default TodoForm
