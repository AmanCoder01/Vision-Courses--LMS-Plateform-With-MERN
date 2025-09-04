import { createSlice } from "@reduxjs/toolkit"
import { resetStore } from "./actions";

const initialState = {
    allReview: []
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        setAllReview: (state, action) => {
            state.allReview = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStore, () => initialState);
    },
})

export const { setAllReview } = reviewSlice.actions

export default reviewSlice.reducer