import './App.css'
import React from 'react'
// class组件
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

import Lock from './class&state'
import Children from './children'
import Hoc from './hoc'
const name = 'cc'

function namefn(name) {
  return name + 'zz'
}

//=================== JSX 转译成一个名为 React.createElement() 函数调用
const dom = <div>
  <span className={name}>{name}</span>
</div>
// 也可以使自定义的组件
// const cmpdon = <mycomponent></mycomponent>



//=================== 自定义渲染DOM
function strDom(name) {
  // return null 可以隐藏组件
  if (name === 'cc') {
    return <h1>{name}我是真的</h1>
  } else {
    return <h1>{name}我是假的</h1>
  }
}

//=================== 组件,必须大写字母开始
// 函数组件
function Cmp(props) {
  return <h1>{props.name}</h1>
}
const mycmp = <Cmp name="自定义的组件"></Cmp>


const providerfn = (params) => {
  console.log(params)
}

export const ContextVal = React.createContext()
function App() {
  return (
    <div className="App">
      {/* {} 中可以放置任意的js表达式 */}
      hello  {name} {1 + 2}  {namefn(name)}
      {strDom(name)}
      {/* 给元素设置属性,属性名应该小驼峰  class = className*/}
      <div className="aa" id={name} tabIndex={name}>元素属性添加值</div>
      {/* 自定义dom渲染 */}
      {dom}
      {mycmp}
      <Cmp name="自定义组件的另一种写法"></Cmp>
      <Lock></Lock>
      <ContextVal.Provider value={{ name: 'cc', fn: providerfn }}>
        {/* react中可以将任何数据传入props中 */}
        <Children value="dark" left={<Cmp name="具名的child"></Cmp>}>
          <div>我是child组件</div>
        </Children>
      </ContextVal.Provider>
      <Hoc />
    </div>
  )
}

export default App
