// 高阶组件 其实就是mixins  在多个不同的组件中需要用到相同的功能，高阶组件是函数，不是组件
// 高阶组件接收一个组件，返回一个组件或者高阶函数
import React from 'react'
import PropTypes from 'prop-types' //props类型验证

function hoc(ComponentClass) {
  return class HOC extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        age: 18
      }
    }
    componentDidMount() {
      console.log("hoc")
    }

    render() {
      // 那么ComponentClass 组件也有了componentDidMount生命周期，且能通过props访问age属性
      return <ComponentClass {...this.state} />
    }
  }
}

class ComponentClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div>高阶组件 {this.props.age}</div>
  }
}
ComponentClass.propTypes = {
  age: PropTypes.number
}

export default hoc(ComponentClass)