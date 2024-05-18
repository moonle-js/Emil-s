import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Default from "./Components/Default";
import MainPage from "./Components/MainPage";
import Contacts from "./Components/Contacts";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

const root = ReactDOM.createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default></Default>,
        children: [
            {
                index: true,
                element: <Login></Login>
            },
            {
                path: "sign",
                element: <SignUp></SignUp>
            },
            {
                path: 'mainPage',
                element: <MainPage></MainPage>,
                children: [
                    {
                        path: "contact",
                        element: <Contacts></Contacts>
                    },
                    {
                        path: "about",
                        element: <AboutUs></AboutUs>
                    },
                    {
                        path: 'contactUs',
                        element: <ContactUs></ContactUs>
                    }
                ]
            }
        ]
    }
])

root.render(
    <>
        <RouterProvider router={router}>

        </RouterProvider>
    </>
)