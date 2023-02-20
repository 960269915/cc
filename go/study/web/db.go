package web

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func Open()(err error) {
	var dsn = "root:caiyuntao@1992@/go?charset=utf8mb4&parseTime=True"
	//db, err := sql.Open("mysql", "root:caiyuntao@1992@/go")
	db,err = sql.Open("mysql",dsn)
	if err != nil {
		return err
	}
	err = db.Ping()
	if err != nil{
		return err
	}
	return nil
}

func Insert()  {
	var sqlStr = "insert into user(name,age) values(?,?)"
	ret, err := db.Exec(sqlStr, "张三", 18)
	if err != nil{
		fmt.Printf("err执行失败",err)
		return
	}
	id, err := ret.LastInsertId() //新插入的数据的id
	if err != nil{
		fmt.Printf("err_插入失败",err )
	}
	fmt.Printf("插入成功", id)
}

type User struct {
	id int
	name string
	age int
}
func Query()  {
	var u User
	//err := db.QueryRow("select * from user where id = ?", 1).Scan( &u.name, &u.age,&u.id) //要注意数据对应,查询一行
	//if err != nil{
	//	fmt.Printf("查询错误", err)
	//}else{
	//	fmt.Printf("user", u)
	//}

	//查询多行
	query, err := db.Query(	"select * from user")
	defer query.Close()
	if err!=nil{
		fmt.Printf("查询错误", err)
	}else{
		for query.Next(){
			query.Scan(&u.name, &u.age,&u.id)
			fmt.Printf("user", u)
		}
	}
}

func Update()  {
	exec, err := db.Exec("update user set name = ? where id = ?", "zz", 1)
	if err != nil{
		fmt.Printf("err",err)
	}else{
		affected,_  := exec.RowsAffected() //受影响行数
		fmt.Printf("影响行数",affected)
	}
}

func Del()  {
	exec, err := db.Exec("delete from user where id = ?", 1)
	if err != nil{
		fmt.Printf("err", err)
	}else{
		affected, _ := exec.RowsAffected()
		fmt.Printf("删除行数", affected)
	}
}

//13990691989 廖桂东   峨眉山市中置商贸有限责任公司  张孝兵原高管公司
//18408263857 张孝兵