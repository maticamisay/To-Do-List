import './App.css';
import Header from '../Components/Header/Header'
import { useContext } from 'react'
import { TodoContext } from '../Components/TodoContext/TodoProvider';
import TodoCounter from '../Components/TodoCounter'
import TodoSearch from '../Components/TodoSearch'
import TodoList from '../Components/TodoList'
import TodoItem from '../Components/TodoItem';
import CreateTodoButton from '../Components/CreateTodoButton';
import Modal from '../Modal/Modal';
import TodoForm from '../Components/TodoForm';


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    return (
        <>
            <Header/>
            <TodoCounter />
            <TodoSearch />
            
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={()=>completeTodo(todo.text)}
                        onDelete={()=>deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
             )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </>
    )
}

export default AppUI
