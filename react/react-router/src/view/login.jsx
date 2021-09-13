import { useAuth } from '../tools/auth'
import { useLocation, useHistory } from 'react-router-dom'
function Login() {
  let auth = useAuth()
  let location = useLocation()
  let history = useHistory()
  let { from } = location.state || { from: { pathname: "/" } }
  function login() {
    auth.signin(() => {
      history.replace(from)
    })
  }
  return (
    <div>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default Login