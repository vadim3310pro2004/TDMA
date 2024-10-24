import { RouterProvider, RouterProviderProps } from "react-router-dom";
import router from "./router";
import { FC, } from "react";


export interface AppRouterProviderProps extends Omit<RouterProviderProps, "router"> { }


export const AppRouterProvider: FC<AppRouterProviderProps> = (props) => {
    return (
        <RouterProvider
            router={router}
            {...props}
        />
    );
};