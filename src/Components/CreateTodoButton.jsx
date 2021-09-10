import React from 'react'
import './css/CreateTodoButton.css'

function CreateTodoButton(props) {

    const onClickButton = (msj) => {
        alert(msj);
    }


    return (
        <>
            <button 
            className="CreateTodoButton"
            onClick={onClickButton}
            >
                +
            </button>
        </>
    )
}

export default CreateTodoButton
