// package main

// //========================================所有的参数都是传递一个复制的值（重要）

// // 定义函数类型
// type fnType func(int, bool) (int, bool)

// // 函数返回值
// func sum1(a int, b bool) (val1 int, val2 bool) {
// 	return a, b
// }

// func sum2(a int, b bool) (int, bool) {
// 	if a > 0 {
// 		return a, true

// 	} else {
// 		return a, false
// 	}
// }

// // 函数当参数传递
// func test1(name string, fn func(string)) {
// 	fn(name)
// }

// // 返回值是函数
// func test2(name string) func(int, int) int {
// 	if name == "+" {
// 		//匿名函数
// 		return func(i1 int, i2 int) int {
// 			return i1 + i2
// 		}
// 	} else {
// 		return func(i1 int, i2 int) int {
// 			return i1 - i2
// 		}
// 	}
// }

// // 闭包
// func test3() func(int) int {
// 	var x int
// 	return func(y int) int {
// 		x += y
// 		return x
// 	}
// }

// //t := test3()
// //print(t(10))
// //print(t(20))
// //print(t(30))

// // defer 语句,相当于异步，执行顺序先进后出
// func test4() {
// 	print("start")
// 	defer print("1")
// 	defer print("2")
// 	defer print("3")
// 	print("end")
// }

// type TestPerson struct {
// 	name string
// 	age  int
// }

// func test5(p TestPerson) {
// 	p.name = "cc"
// 	print("\n", p.name)
// }

// // 传递指针地址，会改变传递的值
// func test6(p *TestPerson) {
// 	p.name = "cc"
// }

// func main() {
// 	//var ff fnType = sum1
// 	//i, b := ff(1, false)
// 	//print(i, b)
// 	var pp = TestPerson{
// 		name: "zz",
// 	}
// 	test5(pp)
// 	print("\n", pp.name)

// 	//取pp的地址
// 	var p1 = &pp
// 	test6(p1)
// 	print("\n", pp.name)
// }
