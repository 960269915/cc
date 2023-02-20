package gom

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB

type Project struct {
 	gorm.Model //继承gorm的基础属性，比如id，创建时间和删除时间
 	Name string  //记得大写
 }

var p Project
//创建一条数据
func Create(db *gorm.DB)  {
	project := Project{
		Name: "贴瓷砖",
	}
	db.Create(&project)
}

func Find(db *gorm.DB)  {
	//单个查询
	//db.First(&p,1) //查询主键为1的
	//db.First(&p,"name =?","贴瓷砖") //条件查询

}
func Update(db *gorm.DB)  {
	db.First(&p,1) //注意操作之前，需要找到数据
	db.Model(&p).Updates(Project{ //结构体的方式 只能更新非0字段
		Name:"xxx",
	})
	fmt.Printf("p", p)
}
func Del(db *gorm.DB)  {
	db.First(&p,1) //注意操作之前，需要找到数据
	db.Delete(&p,1) //删除默认为逻辑删除
}

func GormOpen()  {
	var dsn = "root:caiyuntao@1992@/go?charset=utf8mb4&parseTime=True"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil{
		fmt.Printf("gorm链接失败", err)
	}else{
		////创建数据库表
		//db.AutoMigrate(&Project{})
		Del(db)
	}
}

//1对多，一个公司对应多个人员
type User struct {
	gorm.Model
	Name string
	Age int
	CompanyId int //Company的id，关联的外键
	Company Company //关联company  gorm:foreignKey:CompanyIds,重写外键
}
type Company struct {
	gorm.Model
	Name string
}


//1对1 一个人，对应一个车子
type Person struct {
	gorm.Model
	Name string
	Car Car
	//Car []Car 多对1
}
type Car struct {
	gorm.Model
	Name string
	PersonId uint //对应人员的id
}


//多对多
type Student struct {
	gorm.Model
	Name string
	Languages []Languages `gorm:many2many:user_languages`  //自动创建中间表user_languages
}
type Languages struct {
	gorm.Model
	Name string
}

//事务
//func shiwu()  {
//	db.Transaction(func(tx *gorm.DB) error {
//		if err := tx.Create(&user).Error;err != nil{
//			return err
//		}
//		return nil
//	})
//}

