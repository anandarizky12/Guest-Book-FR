import React from "react";
import { useRouter } from 'next/router'
// components
import Navbar from "../navigation/Navbar/Navbar";
import Sidenav from "../navigation/Sidenav/Sidenav";

function Layout({children}) {

    const router = useRouter(); 

    return (
        <>   
            <Sidenav />
            <div className={` ${   !router.pathname.includes('admin')
                                   ? 'static'
                                   : 'static min-h-screen md:ml-64 bg-white'}`}>
                 <Navbar />
                {/* Header */}
            
                <div className={` ${ !router.pathname.includes('admin')
                     ? 'static'
                     : "px-6 md:px-5 h-full mx-auto p-5"}`}>
                  {children}
                </div>
            </div>
        </>
    )
}

export default Layout;
