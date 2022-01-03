import React from 'react';
import Todo from './Todo';

const TodoList =(props)=>{
return(
  <div class="todo-container">
     <ul class="todo-list">
      { props.filteredState.map((todo)=>(
        <Todo todo={todo} setTodos={props.setTodos} key={todo.id} text={todo.text} todos= {props.todos}/>
      ))}
     </ul>
   </div>
);
}
export default TodoList;
