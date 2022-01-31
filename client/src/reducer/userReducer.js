import { userApi } from '../api/userApi';
let userReducer = (state, action) => {
    switch (action.type) {
        case 'setUser':
            let { userInfo } = action.payload;
            return userInfo;
        case 'getUser':
            return state;
        case 'signup':
        //todo
        case 'logout':
        //todo
        case 'signout':
        //todo
    }
};

export default userReducer;
