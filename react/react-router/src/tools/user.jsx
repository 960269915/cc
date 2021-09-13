import { useState } from 'react'
//控制用户的登录登出
function useProvideAuth() {
  const [user, setUser] = useState(null)
  // 登录
  const signin = (cb) => {
    setUser('cc')
    cb()
  }
  // 登出
  const signout = (cb) => {
    setUser('')
    cb()
  }
  return {
    user,
    signin,
    signout
  }
}

export default useProvideAuth