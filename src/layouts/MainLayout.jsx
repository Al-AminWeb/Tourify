import {Outlet} from 'react-router'
import Header from '../components/Header'
import Footer from "../components/Footer.jsx";
import Home from "../pages/Home.jsx";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
