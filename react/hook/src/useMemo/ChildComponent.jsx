import { useEffect, useMemo, useRef } from 'react'
function ChildComponent({ name, children }) {
  function changeXiaohong(name) {
    console.log('她来了，她来了。小红向我们走来了')
    return name + ',小红向我们走来了'
  }
  function test() {
    return JSON.stringify(new Date())
  }
  // 每次父组件的值发生变化，函数都会执行，useMemo的作用是只针对特定的父组件的值，而发生变化
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name])
  const testVal = test()
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.value = '1'
    console.log(inputEl)
  })

  return (
    <>
      <input type="text" ref={inputEl} />
      <div>{testVal}</div>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  )
}

export default ChildComponent