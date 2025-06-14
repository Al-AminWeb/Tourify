import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import AddCoffee from "../components/AddCoffee.jsx";
import CoffeeDetails from "../components/CoffeeDetails.jsx";
import UpdateCoffee from "../components/UpdateCoffee.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import About from "../pages/About.jsx";
import AllPackages from "../pages/AllPackages.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,

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
                path: 'coffee/:id',

                Component: CoffeeDetails,
            },
            {
                path: 'updateCoffee/:id',

                Component: UpdateCoffee,
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

            }
        ],
    },
])

export default router;
