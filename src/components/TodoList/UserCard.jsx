import React from "react";
import style from "./TodoList.module.css";
import { useSelector } from "react-redux";

const UserCard = () => {

    const user = useSelector(state => state.reducer_2.user);

    return (
        <>
        <div className={style.user_info}>
                <p className={user.userName ? style.p_info : null}>{user.userName}</p>
                <p className={user.email ? style.p_info : null}>{user.email}</p>
                <p className={style.p_info}>{user.isAdmin ? "this user is an admin" : "this user isn't an admin"}</p>
        </div>
        </>
    )

};

export default UserCard;
