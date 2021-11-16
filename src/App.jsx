import { BrowserRouter } from 'react-router-dom'

import Menu from './components/menu/menu.component'

import MainContainer from "./layouts/main-container/main-container.component";
import AppRouter from './routes/AppRouter';

import './utils.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <MainContainer>
        <AppRouter />
      </MainContainer>
    </BrowserRouter>
  )
}

export default App
