package obj;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

//数组，相同类型的一组内容,一旦声明，不可以改变长度
public class MyArr {
    int[] arr = new int[]{1,2,3}; //声明数组，并且填充值
    String[] arrStr = new String[]{"cc","zz"};
    int[] arr1 = new int[10]; // arr1[0] = 1;
    int[][] arr2 = new int[][]{{1,2}}; //二维数组
    public void say(){
        for (int i = 0; i < this.arr.length; i++) {
            System.out.println(this.arr[i]);
        }
//      foreach 缺点，拿不到index
        for (String i:this.arrStr){
            System.out.println(i);
        }
        say2(this.arr);
    }
//    可变长度参数... 本质就是传入数组，只能放在最后
    public void say2(int...arr){
        System.out.println(arr[0]);
    }

//    Arrays数组工具类  Collection为集合工具类

    public void say3(){

        Integer[] testArr = new Integer[]{1,5,2,10,4};
        Arrays.sort(testArr);//排序
        System.out.println(Arrays.toString(testArr)); //deepToString,处理多维数组
        System.out.println(Arrays.binarySearch(testArr,2) +"key位置"); //2分搜索，必须先排序
//        也可以将数组转为流处理
        Arrays.stream(testArr)
                .map(e->e+e)
                .forEach(e-> System.out.println(e));

//        将数组转为list,但是不允许改变数组长度
        List<Integer> aslist = Arrays.asList(testArr);
        System.out.println(aslist.get(aslist.size()-1));
        //转为真正的list,将arr当做参数
        List<Integer> newList = new ArrayList<>(Arrays.asList(testArr));
        newList.add(22);
    }
}
