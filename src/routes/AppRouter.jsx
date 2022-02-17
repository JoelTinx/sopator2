import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/home/home.page'))
const AboutPage = React.lazy(() => import('../pages/about/about.page'))
const AdvicesPage = React.lazy(() => import('../pages/advices/advices.page'))

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/advices" element={ <AdvicesPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
