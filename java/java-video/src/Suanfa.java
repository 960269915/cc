public class Suanfa {
//    99乘法表
    public void say1(){
        for(int i = 1;i<=9;i++){
            for (int j = 1; j <= i ; j++) {
                System.out.println(i + "*" + j + "=" + i * j);
            }
        }
    }
//    水仙花算法 153 1^3 + 5^3+ 3^3 = 153;
    /*
    * 153 ->3 153%10 个位
    * 153/10 ->15  15%10 ->5 十位
    * 153/10/10 ->1 百位（整数除整数，是整数）
    * */
    public void say2(){
        for(int i=135;i<999;i++){
            int a = i;
            int sum = 0;
            while (a > 0){
                int b = a % 10;
                sum += b*b*b;
                a/=10; //当a小于10，此处为0，结束循环，顺序为个位，十位，百位
            }
            if(sum == i){
                System.out.println(i);
            }
        }
    }
//    青蛙跳台阶（n台阶，每次跳1或者2，多少种算法）
    public void say3(){
//        1斐波那契额
//        0、1、1、2、3、5、8、13、21、34
//        F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)
        int n = 10;
        int[] arr = new int[n];
        arr[0] = 1; //1阶1种跳法
        arr[1] = 2;//2阶2种跳法，3阶3种，4阶5种，每阶跳法为前两阶跳法之和
        for (int i = 2; i < n; i++) {
            arr[i] = arr[i-1] + arr[i-2];//算法同斐波那契额
            System.out.println("第"+(i+1)+"阶有"+arr[i]+"种跳法");
        }
    }
}
