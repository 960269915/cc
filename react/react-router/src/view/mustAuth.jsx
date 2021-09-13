
function MustAuth() {
  //获取用户信息，放在authContext.Provider上的value
  return (
    <div>
      我是必须鉴权过才能看到的页面
    </div>
  )
}

export default MustAuth