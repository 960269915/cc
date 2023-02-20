package main

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main()  {
	//创建服务
	server := gin.Default()

	//访问地址，处理请求
	server.GET("/hello", func(context *gin.Context) {
		context.JSONP(200,gin.H{"msg":"hello"})
	})

	//获取前端传递的参数
	//url?name="111"
	//server.GET("/postmsg", func(context *gin.Context) {
	//	name := context.Query("name")
	//	context.JSONP(200,gin.H{"msg":name})
	//})

	//url/cc
	//server.GET("/postmsg/:name", func(context *gin.Context) {
	//	name := context.Param("name")
	//	context.JSONP(200,gin.H{"msg":name})
	//})

	//前端传递对象
	server.POST("/json", func(context *gin.Context) {
		data, _ := context.GetRawData()
		var m map[string]interface{}
		json.Unmarshal(data,&m)
		i := m["name"]
		fmt.Printf("i---------------", i)
		context.JSONP(http.StatusOK,m)
	})




	//服务器端口
	server.Run(":8081")
}