import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

import { loginReducer } from '@/redux/reducer/login/loginSlice';

// const rootReducer = combineReducers({ loginReducer })(state, action);

const rootReducer = (state, action) => {
    // ? SSR작업 수행 시 HYDRATE라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행한다.
    if (action.type === HYDRATE) {
        return { ...state, ...action.payload };
    }
    
    return combineReducers({ login: loginReducer })(state, action);
};

export default rootReducer;
