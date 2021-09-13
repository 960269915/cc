import './App.css'
import React, { useState, useEffect } from 'react'
// import useMyhook from './myhook'
import Son from './son'
import ReducerDemo from './reducer'
import Example7 from './useMemo/Example7'
export const ThemeContext = React.createContext()
function App() {
  // console.log(useMyhook())
  const [count, setCount] = useState(0)
  // 副作用  在第一次渲染之后和每次更新之后都会执行。（可以声明多个）
  // 相当于 componentDidMount 和 componentDidUpdate(prevProps, prevState) 和 componentWillUnmount
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`
    return function clear(params) {
      // 每个effect都会返回一个清除函数，当组件被卸载的时候，会执行（可选参数）
    }
  }, [count])
  //count 仅在 count 更改时更新，如果传入[]，就同componentWillUnmount生命周期
  return (
    <div>
      <Example7 />
      <ReducerDemo />
      <div className="App" onClick={() => { setCount(count + 1) }}>
        {count}
      </div>
      <ThemeContext.Provider value="context的值">
        <Son />
      </ThemeContext.Provider>
    </div>
  )
}

export default App


// https://react.docschina.org/docs/hooks-state.html