// package main

// import (
// 	"fmt"
// 	"os"
// )

// // 创建文件
// func makefile() {
// 	f, err := os.Create("a.txt")
// 	if err != nil {
// 		fmt.Print(err)
// 	} else {
// 		f.WriteString("xxxx")             //写入内容
// 		file, err := os.ReadFile("a.txt") // 读取文件内容
// 		if err != nil {
// 		} else {
// 			fmt.Print(string(file[:]))
// 		}
// 	}

// }

// // 创建目录
// func makedir() {
// 	//os.MkdirAll("a/b/c") 创建多级目录
// 	//os.Remove("a.txt") 删除文件或者目录
// 	err := os.Mkdir("wenjian", os.ModePerm)
// 	if err != nil {
// 		fmt.Print(err, "-------")
// 	}
// }

// func main() {
// 	//makedir()
// 	makefile()
// }
