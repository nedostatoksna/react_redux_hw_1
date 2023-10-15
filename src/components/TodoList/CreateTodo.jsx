import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/actionCreators/actionCreators_1";
import style from "./TodoList.module.css";

const CreateTodo = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const preCreateTodo = () => {
        dispatch(createTodo(value));
        setValue("");
    };

    return (
        <div className={style.create_wrapper}>
            <label className={style.input_wrapper}> 
                <input 
                    name="todoInput"
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    className={style.input}
                /> 
            </label>
            <button 
                onClick={() => preCreateTodo()}
                className={style.task_btn}
            >
                create todo
            </button>
        
        </div>
    )
};

export default CreateTodo;