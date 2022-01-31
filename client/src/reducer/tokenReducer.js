import axios from 'axios';
let tokenReducer = async (state, action) => {
    switch (action.type) {
        case 'setToken':
            let { accessToken } = action.payload;
            return accessToken;
    }
};

export default tokenReducer;
