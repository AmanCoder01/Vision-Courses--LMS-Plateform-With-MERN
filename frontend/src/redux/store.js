import userReducer from "./userSlice";
import courseReducer from "./courseSlice";
import lectureReducer from "./lectureSlice";
import reviewReducer from "./reviewSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    course: courseReducer,
    lecture: lectureReducer,
    review: reviewReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);