import { createContext, useContext } from 'react'
import useProvideAuth from './user'

const authContext = createContext()

// 获取auth的值
function useAuth() {
  return useContext(authContext)
}

// ProvideAuth包裹所有的页面，并且全局注册auth值
function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}




export {
  authContext,
  useAuth,
  ProvideAuth
}