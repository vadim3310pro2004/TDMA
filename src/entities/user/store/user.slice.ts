import createAppSlice from "shared/utils/createAppSlice";
import { Role } from "../roles";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "..";

export interface UserState {
    name?: string;
    role?: Role;
    isAuthorized: boolean,
}

const initialState = {
    isAuthorized: false,
} satisfies UserState as UserState;


const slice = createAppSlice({
    name: 'user',
    initialState,

    reducers: (create) => ({

        login: create.reducer((state, { payload }: PayloadAction<UserProps>) => {
            state.isAuthorized = true;
            state.role = payload.role;
            state.name = payload.name; 

        }),

        logout: create.reducer(state => {
            state = {
                isAuthorized: false,
            };
        }),

    }),
});


export const userReducer = slice.reducer;
export const { 
    logout,
    login
} = slice.actions;