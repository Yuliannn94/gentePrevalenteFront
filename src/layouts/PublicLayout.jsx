import NavBar from "../components/NavBar.jsx"
import { Outlet } from "react-router"



import React from 'react'

const PublicLayout = () => {
    return (
        <div className="App">
            <NavBar />
            <div className='w-full h-full bg-gray-200 overflow-y-scroll'>
                <Outlet />
            </div>
        </div>
    )
}

export default PublicLayout
