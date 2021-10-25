import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/home/home.page'))
const AboutPage = React.lazy(() => import('../pages/about/about.page'))
const AdvicesPage = React.lazy(() => import('../pages/advices/advices.page'))

const AppRouter = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/advices" component={AdvicesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Suspense>
    </Switch>
  )
}

export default AppRouter
