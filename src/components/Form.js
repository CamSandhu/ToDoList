import React from 'react'


const Form=(props)=>{

const inputTextHandler=e=>{
  props.setInputText(e.target.value);
}

const submitHandler=e=>{
  e.preventDefault();
  props.setTodos([...props.todos ,{text:props.inputText,completed:false, id:Math.random()*1000}]);
  props.setInputText('');
}

const statusHandler=e=>{
  props.setStatus(e.target.value);
}
return(
  <form>
  <div className="row">
      <input className="col-md-10" value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="col-md-2" onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </div>
      <div className="select row">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
);
}
export default Form;
