import React from 'react'
class Form extends React.Component {
  constructor(props) {
    super(props)
    // 创造一个 textInput DOM 元素的 ref(如父组件需要操作子组件，父组件传递props，子组件引用props来做自己的ref)
    this.input = React.createRef()
    this.state = {
      name: "",
      like: ""
    }
  }
  handleChange = (e) => {
    // 处理多个表单组件的输入，可以为每个表单组件设置name
    console.log('非受控组件的值: ' + this.input.current.value)
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
  render() {
    // ==========受控组件(手动绑定表单数据到state)
    // 如 < input >、 <textarea> 和 <select> ，有自己的state，根据用户的输入进行更新，而在react中，可变状态的值，都放在state中的，改变需要手动setState，将input的值，绑定在state里面，被react这样绑定的组件，就是受控组件
    // ==========非受控组件（通过ref获取dom的值） <input type="file" />永远是个非受控组件
    // Formik 是第三方表单组件
    return (
      <div>
        <h1>表单</h1>
        <form>
          {/* 受控组件 */}
          <label>
            名字:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            选择你喜欢的风味:
            <select value={this.state.like} name="like" onChange={this.handleChange}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">酸橙</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>

          {/* 非受控组件 */}
          <label>
            非受控组件的值
            <input type="text" defaultValue="我是非受控组件的默认值" ref={this.input} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}

export default Form