import React from 'react';
import Todo from './Todo';

const TodoList =(props)=>{
return(
  <div className="todo-container">
     <ul className="todo-list">
      { props.filteredState.map((todo)=>(
        <Todo todo={todo} setTodos={props.setTodos} key={todo.id} text={todo.text} todos= {props.todos} modalIsOpen={props.modalIsOpen} setModalIsOpen={props.setModalIsOpen} />
      ))}
     </ul>
   </div>
);
}
export default TodoList;
