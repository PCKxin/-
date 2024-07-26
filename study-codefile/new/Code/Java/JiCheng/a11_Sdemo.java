package Code.Java.JiCheng;

public class a11_Sdemo {
    /* 打印整形数组: [11,12,33,44] */
    public static void main(String[] args) {
        System.out.println(getArr(new int[]{11, 12, 33, 44, 54}));
    }

    // 设计方法: 需要传参 整形数组 int[] arr 返回值字符串String
    public static String getArr(int[] arr) {
        StringBuffer str = new StringBuffer();
        str.append("[");
        for (int i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) {
                str.append(arr[i]);
            } else {
                str.append(arr[i]).append(",");
            }
        }
        str.append("]");
        return str.toString();
    }
}
