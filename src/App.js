import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css'
import Login from './components/login'
import Home from './components/home'
import VideoDetails from './components/videoDetails'
import Trending from './components/trending'
import Gaming from './components/gaming'
import NotFound from './components/notFound'
import SavedVideos from './components/savedVideos'
import ProtectedRoute from './components/protectedRoute'
import LoginProtector from './components/loginProtector'

import NxtWatchContext from './context/context'
// Replace your code here
class App extends Component {
  state = {darkMode: false, savedVideos: []}

  changeTheme = () => {
    this.setState(prev => ({
      darkMode: !prev.darkMode,
    }))
  }

  addSavedVideo = videoData => {
    const {savedVideos} = this.state
    const check = savedVideos.find(each => each.id === videoData.id)
    if (check === undefined) {
      this.setState(prev => ({
        savedVideos: [...prev.savedVideos, videoData],
      }))
    } else {
      const filtered = savedVideos.filter(each => each.id !== videoData.id)
      this.setState({savedVideos: filtered})
    }
  }

  render() {
    const {darkMode, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkMode,
          changeTheme: this.changeTheme,
          addSavedVideo: this.addSavedVideo,
          savedVideos,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <LoginProtector exact path="/login" component={Login} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
