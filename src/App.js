import {Switch, Route} from 'react-router-dom'

import './App.css'
import Login from './components/login'
import Home from './components/home'
import VideoDetails from './components/videoDetails'
import SideRoute from './components/sideRoute'

// Replace your code here
const App = () => (
  <div className="main-route">
    <SideRoute />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/videos/:id" component={VideoDetails} />
    </Switch>
  </div>
)

export default App
