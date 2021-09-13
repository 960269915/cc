import React from 'react'
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3]
    }
  }
  render() {
    const list = this.state.list.map((number) =>
      <div key={number}>{number}</div>
    )

    return (
      <div>
        <h1>列表渲染</h1>
        {list}
      </div>
    )
  }
}

export default List