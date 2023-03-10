import React from 'react';
import { TodoContext } from '../TodoContex';
import './Todoform.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCalcel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return(
        <form onSubmit = {onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el alamuerzo"
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCalcel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
                
            
        </form>
    );
}


export { TodoForm };