
import './App.css';
import React ,{useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText]=useState('');
  const [todos, setTodos]=useState([]);
  const [status, setStatus]=useState("all");
  const [filteredState, setFilteredState]=useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(()=>{
    const filterHandler=()=>{
      switch (status) {
        case "completed": setFilteredState(todos.filter(todo=>todo.completed===true));
          break;

          case "uncompleted": setFilteredState(todos.filter(todo=>todo.completed===false));
            break;

        default: setFilteredState(todos);
      }
    }

    const saveLocalTodos=()=>{
     localStorage.setItem("todos" ,JSON.stringify(todos));}

    filterHandler();
    saveLocalTodos();
  },[todos, status]);



  const getLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem("todos" ,JSON.stringify([]));
    }
    else{  let localTodos=JSON.parse(localStorage.getItem('todos'));
          setTodos(localTodos);
  }
  };
  return (
    <div className="App">
    <header>
      <h1> Todo List</h1>
    </header>
      <Form  setStatus={setStatus} status={status} setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}/>
      <TodoList filteredState={filteredState} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
