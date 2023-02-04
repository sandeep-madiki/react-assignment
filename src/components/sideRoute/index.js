import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import './index.css'
import {Routes, SideRouteMainBg, ContactUs, SideDes} from './styledComponents'
import NxtContext from '../../context/context'

const darkLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const lightLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class SideRoute extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {darkMode} = value
          const Logo = darkMode ? darkLogo : lightLogo
          return (
            <SideRouteMainBg dark={darkMode}>
              <div className="side-route-bg">
                <Link to="/" className="link">
                  <img
                    src={Logo}
                    alt="website logo"
                    className="channel-logo-side"
                  />
                </Link>
                <ul className="side-select-con">
                  <Link to="/" className="link">
                    <li className="select-item">
                      <AiFillHome size={18} className="side-route-icon" />
                      <Routes dark={darkMode}>Home</Routes>
                    </li>
                  </Link>
                  <Link to="/trending" className="link">
                    <li className="select-item">
                      <AiFillFire size={18} className="side-route-icon" />
                      <Routes dark={darkMode}>Trending</Routes>
                    </li>
                  </Link>
                  <Link to="/gaming" className="link">
                    <li className="select-item">
                      <SiYoutubegaming size={18} className="side-route-icon" />
                      <Routes dark={darkMode}>Gaming</Routes>
                    </li>
                  </Link>
                  <Link to="saved-videos" className="link">
                    <li className="select-item">
                      <BiListPlus size={22} className="side-route-icon" />
                      <Routes dark={darkMode}>Saved Videos</Routes>
                    </li>
                  </Link>
                </ul>
              </div>
              <div>
                <ContactUs dark={darkMode}>CONTACT US</ContactUs>
                <div className="side-social-logos-con">
                  <img
                    className="social-media-img"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <img
                    className="social-media-img"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <img
                    className="social-media-img"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <SideDes dark={darkMode}>
                  Enjoy! Now to see your channels and recommendations!
                </SideDes>
              </div>
            </SideRouteMainBg>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SideRoute
