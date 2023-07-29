import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    errror: "",
    users: []
}

const usersSlice = createSlice({
    initialState: initialState,
    name: "userSlice",
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchUser.rejected, (state) => {
            state.loading = false;
            state.errror = 'failed to load users';
        })

        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = [...action.payload.results];
        })
    }
});

export const fetchUser = createAsyncThunk("user/get", async () => {
    try {
        const request = await axios.get("https://randomuser.me/api/?results=10");
        return request.data;
    } catch (error) {
        return error;
    }

})

export const userSelector = (state) => state.users;
export default usersSlice.reducer;
