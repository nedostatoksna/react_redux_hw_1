import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./TodoList.module.css";
import { checked, deleteTodo, editTodo } from "../../store/actionCreators/actionCreators_1";

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(todo.title);

    const preEditTodo = (id, newTitle) => {
        setIsEdit(false);
        dispatch(editTodo(newTitle, id));
    };

    return (

        <li className={style.task_box}>
            <div className={todo.checked ? style.checked : style.task_inner_box}>
                <input 
                    type="checkbox" 
                    className={style.checkbox} 
                    checked={todo.checked}
                    onChange={() => {dispatch(checked(todo.id))}}
                />
                {
                    isEdit
                        ? (<>
                            <input value={ value } onChange={(e) => setValue(e.target.value)} className={style.input}/>
                        </>)
                        : (<>
                            {todo.title}
                        </>)
                }
                
            </div>
            <div className={style.task_inner_box}>
                <button className={style.task_btn} onClick={() => {dispatch(deleteTodo(todo.id))}}>delete</button>
                {
                    isEdit
                        ? (<>
                            <button className={style.task_btn} onClick={() => preEditTodo(todo.id, value)}>save</button>
                        </>)
                        : (<>
                            <button className={style.task_btn} onClick={() => setIsEdit(true)}>edit</button>
                        </>)
                }
            </div>
        </li>
                    
                

    )
};

export default Todo;