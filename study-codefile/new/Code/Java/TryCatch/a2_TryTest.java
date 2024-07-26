package Code.Java.TryCatch;

// 引入 java.io.FileInputStream 用来读取文件
// import java.io.FileInputStream;
// 引入 java.io.FileNotFoundException 用来处理文件读取异常
// import java.io.FileNotFoundException;
// 引入 java.text.ParseException 用来处理日期格式化异常
// import java.text.ParseException;
// 引入 java.text.SimpleDateFormat 用来格式化日期
import java.text.SimpleDateFormat;

public class a2_TryTest {
    /*
    错误类型
    *   RunTimeException及其子类,:运行时错误
    *   除RunTimeException及其子类以外:编译错误
    */
    public static void main(String[] args) throws Exception { 
        // throws 用来处理异常 Exception 是 Throwable 的子类 用来处理所有的异常
        String str = "2008-02-03";
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        format.parse(str);//提示性错误:出现错误的几率较高

        // FileInputStream fileInputStream = new FileInputStream(""); // 参数是文件路径
    }
}
