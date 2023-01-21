import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import './index.css'

class SideRoute extends Component {
  render() {
    return (
      <div className="side-route-main-bg">
        <div className="side-route-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="channel-logo-side"
          />
          <ul className="side-select-con">
            <li className="select-item">
              <AiFillHome size={18} />
              <p className="select-text-items">Home</p>
            </li>
            <li className="select-item">
              <AiFillFire size={18} />
              <p className="select-text-items">Trending</p>
            </li>
            <li className="select-item">
              <SiYoutubegaming size={18} />
              <p className="select-text-items">Gaming</p>
            </li>
            <li className="select-item">
              <BiListPlus size={22} />
              <p className="select-text-items">Saved Videos</p>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="contact-us">CONTACT US</h4>
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
          <h6 className="side-des">
            Enjoy! Now to see your channels and recommendations!
          </h6>
        </div>
      </div>
    )
  }
}

export default SideRoute
