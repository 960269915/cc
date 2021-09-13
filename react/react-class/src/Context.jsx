// 使用 context, 我们可以避免通过中间元素传递 props：
import React from 'react'
import { ContextVal } from './App'
class ContextCmp extends React.Component {
  render() {
    return (
      <ContextVal.Consumer>
        {(val) =>
          // 此处的val只是个形参，val中可以包含父组件的函数，触发函数，改变父组件的值
          <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto', textAlign: 'center' }}>
            <p>子组件。获取父组件的值:{val.name}</p>
            <div onClick={val.fn}>触发父组件传递的事件</div>
          </div>
        }
      </ContextVal.Consumer>
    )
  }
}

export default ContextCmp