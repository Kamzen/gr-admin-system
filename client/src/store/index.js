import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import employee from "./reducers/employee";


export const store = configureStore({
    reducer: {
        auth: auth,
        employee: employee
    }
})