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
        <Route exact path="/advices" component={AdvicesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
