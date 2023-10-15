import { SET_USER_INFO } from "../actions/actions_2";

const setUserInfo = (userName, email, isAdmin) => ({
    type: SET_USER_INFO,
    payload: { userName, email, isAdmin}
});

export { setUserInfo };