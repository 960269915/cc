// package main

// import (
// 	"sync/atomic"
// 	"time"
// )

// import "sync"

// var wg sync.WaitGroup //让进程同步

// func show(msg string) {
// 	defer wg.Done() //相当于每次从wp里面-1
// 	for i := 0; i < 5; i++ {
// 		print("\n", msg)
// 		time.Sleep(time.Millisecond * 100)
// 	}
// }

// // ==========================进程之间的通信，使用通道。
// var values = make(chan int)

// func send() {
// 	//unbuffered := make(chan string) //创建个无缓冲通道  string代表通道的数据类型
// 	//unbuffered <- "hello"           //发送字符串到通道 <-unbuffered为接受通道的值
// 	//var data = <-unbuffered         //获取通道的值
// 	//print(data)
// 	//buffered := make(chan string, 2) //创建个有缓存的通道 2代表缓存区大小
// 	//buffered <- "hello"
// 	print("\n", "通道写入值,一个耗时的操作")
// 	time.Sleep(time.Duration(3) * time.Second)
// 	var num = 10
// 	values <- num
// }
// func jieshou() {
// 	defer close(values) //等代码执行后，关闭通道
// 	go send()           //先调用耗时的操作
// 	print("do...")      //执行其他代码
// 	var val = <-values  //获取通道内的值
// 	print("\n", val)
// }

// // ============================定时器
// //var ticker = time.NewTicker(time.Second) //NewTicker 每隔多少秒执行一次
// //for _ = range ticker.C {
// //fmt.Print(ticker)
// //ticker.Stop() //结束定时器
// //break
// //}

// // ===============================//锁，当多个线程访问一个变量时，需要加锁
// var num = 10
// var numGp sync.WaitGroup
// var lock sync.Mutex

// func add() {
// 	defer numGp.Done()
// 	lock.Lock()
// 	num += 1
// 	lock.Unlock()
// }
// func sub() {
// 	defer numGp.Done()
// 	lock.Lock()
// 	num -= 1
// 	lock.Unlock()
// }

// // =================================原子操作atomic，跟锁一样，避免程序中大量使用锁
// var atomicNum int32 = 100
// var a = atomic.LoadInt32(&atomicNum) //读

// func add1() {
// 	numGp.Done()
// 	//atomic.StoreInt32(&atomicNum,100) 写
// 	atomic.AddInt32(&atomicNum, 1)
// }
// func sub1() {
// 	numGp.Done()
// 	atomic.AddInt32(&atomicNum, -1)
// }

// // 注意，当主进程结束了，go开启的进程也就结束了。一个main方法，也是一个进程，当方法执行完最后一段代码，进程就结束
// func main() {
// 	//=====================================================
// 	//go show("java") //go关键字开启一个进程
// 	//wg.Add(1)       //每次wp+1
// 	//go show("js")   //go关键字开启一个进程
// 	//wg.Add(1)
// 	//wg.Wait() //当wp里面为0时，代码结束
// 	//==========================================
// 	//show("js")
// 	//jieshou()

// 	//for i := 0; i < 10; i++ {
// 	//	numGp.Add(1)
// 	//	go add()
// 	//	numGp.Add(1)
// 	//	go sub()
// 	//}
// 	//numGp.Wait()
// 	//print(num)
// 	for i := 0; i < 100; i++ {
// 		numGp.Add(1)
// 		go add1()
// 		numGp.Add(1)
// 		go sub1()
// 	}
// 	numGp.Wait()
// 	print(atomicNum)
// }
