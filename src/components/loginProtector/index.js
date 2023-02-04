import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const LoginProtector = props => {
  const jwtTokenOne = Cookies.get('jwt_token')
  if (jwtTokenOne !== undefined) {
    return <Redirect to="/" />
  }
  return <Route {...props} />
}

export default LoginProtector
