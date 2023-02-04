import './index.css'
import Header from '../header'
import SideRoute from '../sideRoute'
import NxtContext from '../../context/context'

import {NotFoundBg, NotFoundHeading} from './styledComponents'

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <div className="flexing">
          <SideRoute />
          <NotFoundBg dark={darkMode}>
            <Header />
            <div className="not-found-bg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
                className="not-found-img"
              />
              <NotFoundHeading dark={darkMode}>Page Not Found</NotFoundHeading>
              <p className="not-found-des">
                We are sorry, the page you requested could not be found.
              </p>
            </div>
          </NotFoundBg>
        </div>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
