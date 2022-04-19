import Nawigacja from './Nawigacja'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from '../pages/main'
import Menu from '../pages/menu'
import Dostawa from '../pages/dostawa'
import Kontakt from '../pages/kontakt'
import React from 'react'
import { LogProvider } from '../contexts/LogContext'
import PanelUsera from './PanelUsera'
import Zakupy from './Zakupy'
import PrywatnyRoute from './PrywatnyRoute'
import ErrorPage from './ErrorPage'



const App = () => {

 
  return (
    <>
      <LogProvider>
      <Router>
        
        <Nawigacja></Nawigacja>
        <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/glowna" component={Main}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/dostawa" component={Dostawa}></Route>
        <Route path="/kontakt" component={Kontakt}></Route>
        <PrywatnyRoute path="/panel" component={PanelUsera}></PrywatnyRoute>
        <PrywatnyRoute path="/zakupy" component={Zakupy}></PrywatnyRoute>
        <Route component={ErrorPage}></Route>
        </Switch>
      </Router>
      </LogProvider>
    </>
  );

}
export default App;







