package mapper;

import entity.Book;
import entity.Student;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface BookMapper {
    @Select("select * from book where bid = #{bid}")
    Book getBookBybid(@Param("bid") int bid);
    @Insert("insert into book (name)  values(#{book.name})")
    int insertBook(@Param("book") Book book);
}
