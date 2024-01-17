import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/Others/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Login/Register/Register";
import Login from "../pages/Login/Login/Login";
import Blog from "../pages/Home/Blog/Blog";
import AddAToy from "../pages/AddAToy/AddAToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import EditToy from "../pages/MyToys/EditToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/add-toy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/toy-details/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: '/my-toys',
                element: <MyToys></MyToys>
            },
            {
                path: '/edit-toy/:id',
                element: <EditToy></EditToy>
            }

        ]
    }
]);

export default router;