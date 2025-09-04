import { createSlice } from "@reduxjs/toolkit"
import { resetStore } from "./actions";

const initialState = {
    userData: null
};

const userSlice = createSlice({
    name: "user",
    initialState,//setUserData("ankush")<={payload}
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStore, () => initialState);
    },
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer