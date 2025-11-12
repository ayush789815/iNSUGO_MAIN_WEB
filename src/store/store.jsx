// import { configureStore } from '@reduxjs/toolkit';

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import { dataApi } from "./CreateApi/dataApi";

const store = configureStore({
  reducer: { user: userSlice,
    [dataApi.reducerPath]: dataApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(dataApi.middleware),
});

export default store;
