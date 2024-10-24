import { createBrowserRouter } from "react-router-dom";

import MainLayout from "pages/layouts/MainLayout";
import StartPage from "pages/StartPage";
import LoginPage from "pages/LoginPage";
import HomePage from "pages/HomePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <StartPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "home",
                element: <HomePage />,
            },
        ],
    },
]);


export default router;
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <StartPage />,
//             },

//             // auth-forms
//             {
//                 path: '',
//                 element: <OnlyFormLayout />,
//                 children: [
//                     {
//                         path: 'login/',
//                         element: <LoginPage />,
//                     },
//                     {
//                         path: 'registration/',
//                         element: <RegistrationPage />,
//                     },
//                     {
//                         path: 'resend-email-confirmation/',
//                         element: <ResendEmailConfirmationPage />,
//                     },
//                 ]
//             },

//             {
//                 path: 'minesweeper/',
//                 element: <MinesweeperPage />,
//             },
//             {
//                 path: 'top-players/',
//                 element: <PlayersListPage />,
//             },
//             {
//                 path: 'profile/',
//                 element: <ProfilePage />,
//             },
//         ],
//     },
// ]);


// export default router;