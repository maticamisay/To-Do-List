import { useContext } from 'react';
import './css/TodoSearch.css';
import { TodoContext } from './TodoContext/TodoProvider';

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <>
            <input 
                className="TodoSearch" 
                placeholder="Buscar tarea"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </>
    )
}

export default TodoSearch
