import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/aboutPage'

const App = () => {

  const location = useLocation().pathname

  const titleList = {
    '/' : 'StudIQ - Find Your Ideal Course, Build Skills',
    '/about' : 'StudIQ - about us',
    '/courses' : 'StudIQ - our courses',
    '/blog' : 'StudIQ - our blogs'
  }

  useEffect(() => {
    document.title = titleList[location]
  }, [location])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App