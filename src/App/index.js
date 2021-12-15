// es importante importar react para que pueda crear la etiqueta <React.Fragment>

import React from 'react';
import { AppUI } from './AppUI';

// const defaulTodos = [
//   {text: "Cortar cebolla", completed: true},
//   {text: "Tomar curso de React", completed: false},
//   {text: "Llorar con la llorona", completed: true},
//   {text: "Bañar a maya", completed: false},
// ];

function useLocalStorage(itemName, initialValue){

  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;
  
  
  // porbar con un false !
  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItem = initialValue;
  } else {
    parseItem = JSON.parse(localStorageItem)
    
  }
  const [item, setItem] = React.useState(parseItem);
 
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}


function App() {
  
  const [todos, saveTodo] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    });
  }


  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    // forma 2
    newTodos[todoIndex].completed = true;
    saveTodo(newTodos);

    // forma 1
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // }

  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  };
  
  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}    
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
