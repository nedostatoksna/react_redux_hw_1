import React from "react";
import CreateTodo from "./CreateTodo";
import { useSelector } from "react-redux";
import style from "./TodoList.module.css";
import Todo from "./Todo";
import UserCard from "./UserCard";

const TodoList = () => {

    const todos = useSelector(state => state.reducer_1.todos);

    return (
        <div className={style.section}>
            <UserCard />
            <div className={style.todo_wrapper}>
                <h1 className={style.header}>Todo</h1>
                <CreateTodo />
                <ul className={style.list}>
                    {
                        todos.map(todo => (
                        <Todo todo={todo} key={todo.id} />
                        ))
                    }
                </ul>
            </div>
        </div>
        
    )
};

export default TodoList;