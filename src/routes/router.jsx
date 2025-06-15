import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import AddCoffee from "../components/AddCoffee.jsx";
import PackageDetails from "../components/PackageDetails.jsx";
import UpdateCoffee from "../components/UpdateCoffee.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import About from "../pages/About.jsx";
import AllPackages from "../pages/AllPackages.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import AddPackages from "../pages/AddPackages.jsx";
import axios from "axios";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                loader:()=>axios(`${import.meta.env.VITE_API_URL}/packages`),
                Component: Home,

            },
            {
               path: "/about",
               Component: About,
            },
            {
                path: 'all-packages',
                Component: AllPackages,
            },
            {
                path: 'signin',
                Component: SignIn,
            },
            {
                path: 'signup',
                Component: SignUp,
            },
            {
                path: "*",
                Component: NotFoundPage,

            },
            {
                path:'add-packages',
                Component: AddPackages,
            },
            {
                path:'package/:id',
                loader:({params})=>axios(`${import.meta.env.VITE_API_URL}/package/${params.id}`),
                Component: PackageDetails,
            }
        ],
    },
])

export default router;
