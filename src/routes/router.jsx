import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";

import PackageDetails from "../components/PackageDetails.jsx";

import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import About from "../pages/About.jsx";
import AllPackages from "../pages/AllPackages.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import AddPackages from "../pages/AddPackages.jsx";
import axios from "axios";
import ManageMyPackages from "../pages/ManageMyPackages.jsx";
import MyBookings from "../pages/MyBookings.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                loader:()=>axios(`https://tourify-server.vercel.app/public-packages`),
                Component: Home,

            },
            {
               path: "/about",
               Component: About,
            },
            {
                path: 'all-packages',
                loader:()=>axios(`https://tourify-server.vercel.app/public-packages`),
                Component: AllPackages,
            },
            {
                path: '/signin',
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
                element:(<PrivateRoute>
                    <AddPackages />
                </PrivateRoute>),
            },
            {
                path:'package/:id',
                loader:({params})=>axios(`https://tourify-server.vercel.app/package/${params.id}`),
                element:(<PrivateRoute>
                    <PackageDetails/>
                </PrivateRoute>),
            },
            {
                path:'manage-packages',
                element:(<PrivateRoute>
                   <ManageMyPackages />
                </PrivateRoute>),
            },
            {
                path:'my-bookings/:email',
                loader: async ({ params }) => {
                    const token = localStorage.getItem('token');
                    return axios.get(`https://tourify-server.vercel.app/my-bookings/${params.email}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });
                },
                element:(<PrivateRoute>
                    <MyBookings />
                </PrivateRoute>),
            }
        ],
    },
])

export default router;
