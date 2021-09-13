import { useState, useEffect } from 'react'
// 自定义hook, 函数名使用use开头
function useMyhook(params) {
  const [hookVal, setHook] = useState('我是hook的值')
  useEffect(() => {
    console.log('hook的useEffect')
  })
  return {
    hookVal,
    setHook
  }
}

export default useMyhook

