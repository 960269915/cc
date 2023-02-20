// package main

// import "fmt"

// //====================go没有面向对象的，需要使用结构体来实现

// type Cat struct {
// 	color string
// }
// type Person struct {
// 	name string
// 	age  int
// 	cat  Cat //结构体嵌套
// }

// // (per Person) 把此方法，绑定到person上
// func (per Person) eat() {
// 	fmt.Printf(per.name + "我的名字")
// }

// // =============================接口
// // 定义接口类型(约束结构体必须要有的方法，只约束方法，属性由结构体约束)
// type Usber interface {
// 	read()
// 	write()
// }

// // 组合接口
// type Aller interface {
// 	Usber
// }

// // 定义结构体
// type Computer struct {
// }
// type Test struct {
// }

// // 电脑结构体实现方法
// func (c Computer) read() {
// 	print("c read")
// }
// func (c Computer) write() {
// 	print("c write")
// }

// func (t Test) test(u Usber) {
// 	u.read()
// 	u.write()
// }

// // ====================================继承
// type Animal struct {
// 	name string
// 	age  int
// }

// func (a Animal) eat() {
// 	print("eat")
// }
// func (a Animal) sleep() {
// 	print("sleep")
// }

// // 此处 Dogs继承了 Animal
// type Dogs struct {
// 	Animal
// }

// func main() {

// 	//=========================
// 	//var tom = Person{
// 	//	name: "cc",
// 	//	age:  18,
// 	//}
// 	//fmt.Print(tom)
// 	//tom.eat()
// 	//===========================
// 	// 匿名结构体,只要是匿名的，都只能在函数内部
// 	//var Dog struct {
// 	//	name string
// 	//}
// 	//Dog.name = "haha"
// 	//c := Computer{}
// 	//t := Test{}
// 	//t.test(c)
// }
