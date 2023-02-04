import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'
import NxtContext from '../../context/context'

import {LoginMainBg, LoginBg, Label, ShowPassword} from './styledComponents'

const LightLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const DarkLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showErrMsg: false,
    errorMessage: '',
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => (
    <NxtContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <>
            <Label dark={darkMode} htmlFor="username">
              USERNAME
            </Label>
            <input
              className="input-el"
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.getUsername}
            />
          </>
        )
      }}
    </NxtContext.Consumer>
  )

  renderPasswordField = () => {
    const {showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <NxtContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <>
              <Label dark={darkMode} htmlFor="password">
                PASSWORD
              </Label>
              <input
                className="input-el"
                type={passwordType}
                id="password"
                placeholder="Password"
                onChange={this.getPassword}
              />
            </>
          )
        }}
      </NxtContext.Consumer>
    )
  }

  changePasswordType = () => {
    this.setState(prev => ({
      showPassword: !prev.showPassword,
    }))
  }

  showErrorMsg = errMsg => {
    this.setState({showErrMsg: true, errorMessage: errMsg})
  }

  setJwtCookie = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/')
    // console.log(this.props)
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const loginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({showErrMsg: false})
      this.setJwtCookie(data.jwt_token)
    } else {
      this.setState({showErrMsg: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const {showErrMsg, errorMessage} = this.state
    return (
      <NxtContext.Consumer>
        {value => {
          const {darkMode} = value
          const logo = darkMode ? DarkLogo : LightLogo
          return (
            <LoginMainBg dark={darkMode}>
              <LoginBg onSubmit={this.submitForm} dark={darkMode}>
                <img className="channel-logo" src={logo} alt="website logo" />
                {this.renderUsernameField()}
                {this.renderPasswordField()}
                <div className="checkbox-con">
                  <input
                    id="showPassword"
                    type="checkbox"
                    onClick={this.changePasswordType}
                  />
                  <ShowPassword htmlFor="showPassword" dark={darkMode}>
                    Show Password
                  </ShowPassword>
                </div>
                <button className="login-btn" type="submit">
                  Login
                </button>
                {showErrMsg && (
                  <p className="error-msg">{`* ${errorMessage}`}</p>
                )}
              </LoginBg>
            </LoginMainBg>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Login
