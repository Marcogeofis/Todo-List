// es importante importar react para que pueda crear la etiqueta <React.Fragment>

import React from 'react';
import { TodoProvider } from '../TodoContex';
import { AppUI } from './AppUI';

// const defaulTodos = [
//   {text: "Cortar cebolla", completed: true},
//   {text: "Tomar curso de React", completed: false},
//   {text: "Llorar con la llorona", completed: true},
//   {text: "Bañar a maya", completed: false},
// ];


function App() {
    return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
