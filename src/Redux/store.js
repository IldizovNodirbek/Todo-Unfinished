// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import taskReducer from "./taskSlice";
import specialTasksReducer from "./specialTasksSlice"; // Import qilamiz
import { loadState, saveState } from "./storage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
    specialTasks: specialTasksReducer, // specialTasksSlice qo'shildi
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
