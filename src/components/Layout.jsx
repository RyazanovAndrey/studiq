import React from 'react'
import Header from '../sections/Header'
import { Outlet } from 'react-router'
import Footer from '../sections/Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout