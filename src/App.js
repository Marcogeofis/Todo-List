// import './App.css';
// es importante importar react para que pueda crear la etiqueta <React.Fragment>

import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItems';
import { CreateTodoButton } from './CreateTodoButton';


const todos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Tomar curso de React", completed: false},
  {text: "Llorar con la llorona", completed: false},
  {text: "Bañar a maya", completed: false},

];


function App() {
  return (
    <React.Fragment>
      <TodoCounter /> 
      <TodoSearch /> 
      <TodoList>
        {todos.map(todo => ( 
           <TodoItem key={todo.text} text={todo.text}/>
         ))}
      </TodoList> 
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
