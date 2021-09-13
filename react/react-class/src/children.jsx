import React from 'react'
import ContextCmp from './Context'
class Children extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.children}
        {this.props.left}
        <ContextCmp></ContextCmp>
      </div>
    )
  }
}

export default Children

// Fragment或者<></> 代替vue的template元素