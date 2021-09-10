import './css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
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
            <p>{searchValue}</p>
        </>
    )
}

export default TodoSearch
