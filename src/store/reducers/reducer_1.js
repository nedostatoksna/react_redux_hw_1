import { CHECKED, CREATE_TODO, DELETE_TODO, EDIT_TODO } from "../actions/actions_1";
import initialState from "../initialState";

let nextId = 1;

const reducer_1 = (state = initialState, {type, payload}) => {

    switch (type) {
        case CREATE_TODO: return {
            ...state,
            todos: [
                ...state.todos,
                {
                    title: payload.newTodo,
                    id: nextId++,
                    checked: false
                }
            ]
        }
        case CHECKED: return {
            ...state,
            todos: [
                ...state.todos.map(todo => {
                    if (todo.id === payload.id) return {...todo, checked: !todo.checked};
                    else return todo;
                })
            ]
        }
        case DELETE_TODO: return {
            ...state,
            todos: [
                ...state.todos.filter(todo =>
                 todo.id !== payload.id)
            ]
        }
        case EDIT_TODO: return {
            ...state,
            todos: [
                ...state.todos.map(todo => {
                    if (todo.id === payload.id) return {...todo, title: payload.newTitle}
                    else return todo;
                })
            ]
        }
            
        default: return state;

    }
};

export default reducer_1;