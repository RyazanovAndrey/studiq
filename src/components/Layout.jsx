import React from 'react'
import Header from '../sections/Header'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main>
            <Outlet />
        </main>
        <div className="mt-auto bg-gray-200">
          <div className="container mx-auto px-3 py-2">2025</div>
        </div>
    </div>
  )
}

export default Layout