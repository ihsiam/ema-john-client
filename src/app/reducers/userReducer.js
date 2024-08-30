import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../actions/userAction';

const slice = createSlice({
    name: 'UserReducer',
    initialState: {
        loading: false,
        user: {},
        error: null,
        isAuth: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuth = true;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default slice.reducer;
