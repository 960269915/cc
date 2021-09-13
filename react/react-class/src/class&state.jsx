import React from "react"
import List from './list'
import Form from './form'


class Lock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), isshow: false }
    // 绑定this是为了在函数中正确使用this,或者声明的时候使用箭头函数
    // this.clickfn = this.clickfn.bind(this)
  }
  componentDidMount() {
    // 组件挂载
    // 可以向当前this添加任意属性（不参与页面渲染的，可以不写在state里面）
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    // 组件被移除
    clearInterval(this.timerID)
  }
  tick() {
    // setState 是更改数据的唯一方法
    this.setState({
      date: new Date()
    })
    // 如果更改的值，需要被拿来做计算，需要使用函数
    // this.setState(function (state, props) {
    //   return {
    //     counter: state.counter + props.increment
    //   }
    // });
  }
  clickfn = () => {
    this.setState(state => ({
      isshow: !state.isshow
    }))
  }

  render() {
    let isshow = this.state.isshow
    let dom
    if (isshow) {
      dom = <div>显示了</div>
    } else {
      dom = <div>隐藏了</div>
    }

    return (
      <div>
        <span onClick={this.clickfn}>我是有点击事件的 {this.state.isshow + '--'}</span>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        {dom}
        {isshow && <div>在jsx里面动态显示</div>}

        <div>
          The user is <b>{isshow ? 'currently' : 'not'}</b> 三目运算
        </div>
        <List />
        <Form />
      </div>
    )
  }
}


export default Lock