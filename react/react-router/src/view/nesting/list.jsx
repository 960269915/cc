import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import Son1 from './son1'
import Son2 from './son2'
function List() {
  const { path, url } = useRouteMatch()
  // console.log(path)
  // console.log(url)
  return (
    <div>
      我是有子路由的
      <ul>
        <li>
          <Link to={`${url}/son1/22`}>
            son1
          </Link>
        </li>
        <li>
          <Link to={`${url}/son2`}>
            son2
          </Link>
        </li>
      </ul>

      <Switch>
        {/* 精准匹配当前父路由 */}
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        {/* 使用url的原因是为了动态匹配父路径，不需要写死 */}
        <Route path={`${url}/son1/:id`}>
          <Son1></Son1>
        </Route>

        <Route path={`${url}/son2`}>
          <Son2></Son2>
        </Route>
      </Switch>

    </div>
  )
}

export default List