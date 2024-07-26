package Code.Java.JiCheng;

import java.util.StringJoiner;

public class a13_Sdemo {
    public static void main(String[] args) {
        int[] arr = {11, 22, 33, 44, 55};
        System.out.println(getArr(arr));
    }

    // 拼接整形数据
    public static String getArr(int[] arr) {
        StringJoiner str = new StringJoiner(",", "[", "]");
        for (int i = 0; i < arr.length; i++) {
            str.add(String.valueOf(arr[i]));
        }
        return str.toString();
    }
}
