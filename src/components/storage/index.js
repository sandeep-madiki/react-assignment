import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

// import './index.css'

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
    <>
      <label className="label" htmlFor="username">
        USERNAME
      </label>
      <input
        className="input-el"
        type="text"
        id="username"
        onChange={this.getUsername}
      />
    </>
  )

  renderPasswordField = () => {
    const {showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input-el"
          type={passwordType}
          id="password"
          onChange={this.getPassword}
        />
      </>
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
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) <Redirect to="/" />
    const {showErrMsg, errorMessage} = this.state
    return (
      <div className="login-main-bg">
        <form onSubmit={this.submitForm} className="login-bg">
          <img
            className="channel-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="channel logo"
          />
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <div className="checkbox-con">
            <input
              id="showPassword"
              type="checkbox"
              onClick={this.changePasswordType}
            />
            <label htmlFor="showPassword" className="show-password">
              Show Password
            </label>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
          {showErrMsg && <p className="error-msg">{`* ${errorMessage}`}</p>}
        </form>
      </div>
    )
  }
}

export default Login
