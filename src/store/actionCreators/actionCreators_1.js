import { CHECKED, CREATE_TODO, DELETE_TODO, EDIT_TODO } from "../actions/actions_1";

const createTodo = (newTodo) => ({
    type: CREATE_TODO,
    payload: { newTodo }
});

const checked = (id) => ({
    type: CHECKED,
    payload: { id }
});

const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id }
});

const editTodo = (newTitle, id) => ({
    type: EDIT_TODO,
    payload: { newTitle, id }
});

export { createTodo, checked, deleteTodo, editTodo };