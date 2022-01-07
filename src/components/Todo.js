import React from 'react';
import Modal from 'react-modal';


const Todo=(props)=>{

const deleteHandler=()=>{
  props.setTodos(props.todos.filter((el)=>el.id!==props.todo.id));
};

const completeHandler=()=>{
  props.setTodos(props.todos.map((item)=>{
    if(item.id===props.todo.id){
      return{...item, completed:!item.completed}

    }
    return item;
  }));
}

  return(
     <React.Fragment>
      <div className="todo">
      <li onClick={()=>props.setModalIsOpen({boolean:true ,value: (props.text)})} className={`todo-item ${props.todo.completed ? "completed":""}`}>{props.text}</li>

      <button onClick={completeHandler} className="complete-btn">
       <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
       <i className="fas fa-trash"></i>
      </button>
      </div>

    <Modal isOpen={props.modalIsOpen.boolean} onRequestClose={()=>props.setModalIsOpen(false)} className="modal">
          <p  contenteditable="true">{props.modalIsOpen.value}</p>
          <i class="fas fa-check-circle" id="check" ></i>
          <i class="fas fa-times-circle" id="close" ></i>
    </Modal>
</React.Fragment>

  );
}

export default Todo;
