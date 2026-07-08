import React from 'react'
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';


function Layout(){
    return(
        <>
        <Header />
        {/* this outlet means that the header and footer will stay same at every page but the body willcahnge to about me or contact or github and so on */}
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout