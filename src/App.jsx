import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Menu from './components/menu/menu.component'

import HomePage from './pages/home/home.page'
import AboutPage from './pages/about/about.page'
import AdvicesPage from './pages/advices/advices.page'

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/advices" exact component={AdvicesPage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </Router>
  )
}

export default App
