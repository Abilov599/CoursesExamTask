import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import getAllCources from "../slice/getAllCources";

export const store = configureStore({
  reducer: {
    getAllCources: getAllCources,
  },
  middleware: [thunk],
});
