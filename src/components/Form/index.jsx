import React, { useState } from "react";
import style from "./Form.module.css";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../store/actionCreators/actionCreators_2";

const Form = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const dispatch = useDispatch();

    const preSubmit = (e, userName, email, isAdmin) => {
        e.preventDefault();
        if ((userName.length !== 0) && (email.length !== 0)) {
            dispatch(setUserInfo(userName, email, isAdmin));
            setUserName("");
            setEmail("");
            setIsAdmin(false);
        }
    };

    return (
        <div className={style.section}>
            <h2 className={style.header}>Form</h2>
            <form className={style.form_wrapper} onSubmit={(e) => preSubmit(e, userName, email, isAdmin)}>
                <label> name: <input 
                                value={userName} 
                                className={style.input} 
                                onChange={(e) => setUserName(e.target.value)} 
                                name="name"
                              />
                </label>
                <label> email: <input 
                                    value={email} 
                                    className={style.input} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    name="email" 
                                />
                </label>
                <label className={style.checkbox} > is admin <input 
                                                                type="checkbox" 
                                                                onChange={() => setIsAdmin(!isAdmin)} 
                                                                name="isAdmin" 
                                                                checked={isAdmin}
                                                              />
                </label>
                <button 
                    type="submit" 
                    className={style.task_btn} 
                >
                    submit
                </button>
            </form>
        </div>
    )
};

export default Form;