import {HiMoon} from 'react-icons/hi'

import './index.css'

const Header = () => (
  <nav className="nav-con">
    <HiMoon size={30} />
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
      alt="profile"
      className="header-profile"
    />
    <button className="logout-btn" type="button">
      Logout
    </button>
  </nav>
)

export default Header
