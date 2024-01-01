
import About from "./components/About";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <Header />
            <About />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
