import { createSlice } from "@reduxjs/toolkit"
import { resetStore } from "./actions"

const initialState = {
    creatorCourseData: [],
    courseData: [],
    selectedCourseData: null
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCreatorCourseData: (state, action) => {
            state.creatorCourseData = action.payload
        },
        setCourseData: (state, action) => {
            state.courseData = action.payload
        },
        setSelectedCourseData: (state, action) => {
            state.selectedCourseData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStore, () => initialState);
    },
})

export const { setCreatorCourseData } = courseSlice.actions
export const { setCourseData } = courseSlice.actions
export const { setSelectedCourseData } = courseSlice.actions
export default courseSlice.reducer