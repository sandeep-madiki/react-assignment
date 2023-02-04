import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'

import NxtWatchContext from '../../context/context'
import './index.css'

import {NavCon, ThemeIcon, LogoutBtn, SmallLogoutIcon} from './styledComponents'

const lightLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = props => {
  const logoutFunc = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkMode, changeTheme} = value
        const logo = darkMode ? darkLogo : lightLogo
        const toggleTheme = () => {
          changeTheme()
        }
        return (
          <NavCon dark={darkMode}>
            <Link to="/" className="link">
              <img src={logo} alt="website logo" className="header-logo" />
            </Link>
            <div className="test-2">
              <ThemeIcon
                type="button"
                dark={darkMode}
                onClick={toggleTheme}
                data-testid="theme"
              >
                {!darkMode ? (
                  <FaMoon size={26} />
                ) : (
                  <BsBrightnessHigh size={26} />
                )}
              </ThemeIcon>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="header-profile"
              />
              <SmallLogoutIcon dark={darkMode}>
                <GiHamburgerMenu size={30} />
              </SmallLogoutIcon>
              <Popup
                modal
                trigger={
                  <div>
                    <LogoutBtn dark={darkMode} type="button">
                      Logout
                    </LogoutBtn>
                    <SmallLogoutIcon dark={darkMode}>
                      <FiLogOut size={30} />
                    </SmallLogoutIcon>
                  </div>
                }
              >
                {close => (
                  <div className="popup-con">
                    <p className="popup-warn">
                      Are you sure, you want to logout?
                    </p>
                    <div className="popup-btns-con">
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => {
                          close()
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="confirm-btn"
                        onClick={logoutFunc}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </NavCon>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
