import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Information from './Information'

const Layout = ({ children }) => {
    const info = 'Your One Stop Destination for Design, Development, and Digital Marketing about Web Development'
    return (
        <div className='relative bg-background-dark text-xl text-white w-full no-scrollbar'>
            <div className='max-w-screen-xl mx-auto'>
                <Information
                    value={info}
                />
            </div>
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default Layout

