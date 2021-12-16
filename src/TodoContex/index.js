import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
  
  const {
    item: todos,
    saveItem: saveTodo,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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

  const addTodo = (text) => {
    const newTodos = [...todos];
    
    newTodos.push({
      completed: false,
      text,
    });
    saveTodo(newTodos);
  };

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
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        addTodo,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    }}>
        {props.children}
    </TodoContext.Provider>

    );
}


export { TodoContext, TodoProvider}
