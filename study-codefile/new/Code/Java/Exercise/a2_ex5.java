package Code.Java.Exercise;


/*
请把一个整型数组，例如存了数据：11，22，33，拷贝成一个一模一样的新数组出来
*/ 
public class a2_ex5 {
    public static void main(String[] args) {
        int[] arr = {11, 22, 33};
        arrCopy(arr);

        // 打印数组内存地址
        System.out.println(arr);
        System.out.println(arrCopy(arr));

        // 打印数组内容
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
        for (int i = 0; i < arrCopy(arr).length; i++) {
            System.out.println(arrCopy(arr)[i]);
        }
    }

    public static int[] arrCopy(int[] arr) {
        int[] arrCopy = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            arrCopy[i] = arr[i];
        }
        return arrCopy;
    } 
}
