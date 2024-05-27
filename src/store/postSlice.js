import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    postData: null
}

const postSlice = createSlice({
    name: "updatePost",
    initialState,
    reducers: {
        updatePostData: (state, action) => {
            state.postData = action.payload.postData
        },
        delUpdatePostData: (state) => {
            state.postData = null
        }
    }
})

export const {updatePostData, delUpdatePostData} = postSlice.actions

export default postSlice.reducer