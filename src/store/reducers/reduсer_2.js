import { SET_USER_INFO } from "../actions/actions_2";
import initialState from "../initialState";

const reduсer_2 = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_INFO: return {
            ...state,
            user: { 
                    userName: payload.userName,
                    email: payload.email,
                    isAdmin: payload.isAdmin
            }
        }
        default: return state;
    }
};

export default reduсer_2;