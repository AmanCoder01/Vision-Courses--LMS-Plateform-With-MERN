import { createSlice } from "@reduxjs/toolkit"
import { resetStore } from "./actions";

const initialState = {
    lectureData: []
}

const lectureSlice = createSlice({
    name: "lecture",
    initialState,
    reducers: {
        setLectureData: (state, action) => {
            state.lectureData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStore, () => initialState);
    },
})

export const { setLectureData } = lectureSlice.actions
export default lectureSlice.reducer