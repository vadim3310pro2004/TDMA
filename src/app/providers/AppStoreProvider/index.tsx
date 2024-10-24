import store from "./store";
import { FC } from "react";
import { Provider, ProviderProps } from "react-redux";


export interface StoreProviderProps extends Omit<ProviderProps, "store"> {} 


const AppStoreProvider: FC<StoreProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};


export default AppStoreProvider;
export type { AppDispatch, RootState } from './store'