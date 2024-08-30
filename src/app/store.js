import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

const store = configureStore({
    reducer: {
        User: userReducer,
    },
});

export default store;
