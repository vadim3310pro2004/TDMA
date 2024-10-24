import { FC } from "react";
import "./index.scss";
import AppStoreProvider from "./providers/AppStoreProvider";
import { AppRouterProvider } from "./providers/AppRouterProvider";


const App: FC = () => {
    return (
        <AppStoreProvider>
            <AppRouterProvider />
        </AppStoreProvider>
    );
}


export default App;