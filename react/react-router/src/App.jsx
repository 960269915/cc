
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import React from 'react'

import Home from './view/home'
import About from './view/about'
import Dashboard from './view/dashboard'
import List from './view/nesting/list'
import { ProvideAuth } from './tools/auth'
import MustAuth from './view/mustAuth' //必须鉴权后才能看到的页面
import { useAuth } from './tools/auth'
import Login from './view/login'
// 需要鉴权的路由全部由此组件包裹
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth()
  return (
    // Route 可以直接包裹组件，可以使用render函数  也可以<Route path="/two" children={<h3>Two</h3>} />
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}




function App() {
  return (
    <ProvideAuth>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/100">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
          <li>
            <Link to="/MustAuth">MustAuth</Link>
          </li>

          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>

        <Switch>
          {/* 路由path 匹配的是路径的开头，并不是整个path */}
          {/* exact为path的完全匹配 */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/:id">
            {/* 路由传递id参数 */}
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/list">
            <List></List>
          </Route>
          <PrivateRoute path="/MustAuth">
            <MustAuth></MustAuth>
          </PrivateRoute>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="*" children={<div>404</div>}></Route>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}


export default App


// 嵌套路由和递归路由 具体看官网
// 文档
/*
===========================useHistory
let history = useHistory();
history.push("/home"); 跳转

也可以携带其他参数
history.push({
    pathname:"/admin/reply",
    params:{
        id:e.id
}

===========================useLocation 前URL对象
let location = useLocation();

===========================useParams URL上的键/值对对象
链接后面的使用useParams  location里面的使用useLocation获取
let { slug } = useParams();

===========================Link 跳转标签 （还有个标签是NavLink，可以为标签添加样式）
<Link to="/courses?sort=name" />

可传递对象
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>

替换
<Link to="/courses" replace />

把当前location当参数传递
<Link to={location => ({ ...location, pathname: "/courses" })} />

跳转的为一个组件
<Link to="/" component={FancyLink} />
*/


// ===========================如果需要全局状态管理，可利用reducer 和 createContext 可以创建简易的全局状态
