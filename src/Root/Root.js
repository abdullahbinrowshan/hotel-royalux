import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const Root = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root