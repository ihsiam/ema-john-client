import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { baseUrl } from '../../utility/baseUrl';

export const fetchUser = createAsyncThunk('user/fetchUser', async(_, {rejectWithValue}) =>{
    try{
        const res = await axios.get(`${baseUrl}/user/userInfo`,{ withCredentials: true });
        return res.data;
    }catch(error){
        return rejectWithValue(error.response.data.msg)
    }   
} );