package TEST.十五月月考;

/*
模拟实现一个基于文本界面的《家庭记账软件》
要求：该软件能够记录家庭的收入、支出，并能够打印收支明细表。
假设家庭起始的生活基本金为10000元。
每次登记收入（菜单2）后，收入的金额应累加到基本金上，并记录本次收入明细，以便后续的查询。
每次登记支出（菜单3）后，支出的金额应从基本金中扣除，并记录本次支出明细，以便后续的查询。
查询收支明细（菜单1）时，将显示所有的收入、支出名细列表
菜单4为退出键 退出循环

*/ 

import java.util.Scanner;

// 交易记录类
class Transaction { 
    private String description; // 描述
    private double amount; // 金额
    private double baseFund2; // 本金
    private boolean isIncome; // 是否为收入

    public Transaction(String description, double amount, double baseFund2,boolean isIncome) {
        this.description = description;
        this.amount = amount;
        this.baseFund2 = baseFund2;
        this.isIncome = isIncome;
    }

    @Override // 检查被修饰的方法是否是有效的重写方法
    public String toString() {
        // 返回字符串表示的交易记录，并按制表符格式输出
        String type = isIncome ? "收入" : "支出";
        return type + "\t" + amount + "\t\t" + baseFund2 + "\t\t" + description;
    }
}

public class test01 {
    private static double baseFund = 10000.0; // 起始本金
    private static Transaction[] transactions = new Transaction[100]; // 交易记录数组
    private static int transactionCount = 0; // 记录交易的数量

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // 创建 Scanner 对象，用于接收用户输入
        int choice;

        // 选项循环
        do {
            printMenu(); // 打印菜单
            System.out.print("请输入选项：");
            choice = sc.nextInt(); // 获取用户输入的选项

            switch (choice) {
                case 1:
                    printTransactions(); // 打印交易记录
                    break;
                case 2:
                    recordIncome(sc); // 登记收入
                    break;
                case 3:
                    recordExpense(sc); // 登记支出
                    break;
                case 4:
                    System.out.println("正在退出...");
                    break;
                default:
                    System.out.println("无效选项，请重试。");
            }
        } while (choice != 4); // 当选项不是4时继续循环
    }

    // 文字模块
    private static void printMenu() {
        // 输出界面标题和菜单选项
        System.out.println("-----------家庭收支记账软件-----------");
        System.out.println("\n\t   1 收支明细");
        System.out.println("\t   2 登记收入");
        System.out.println("\t   3 登记支出");
        System.out.println("\t   4 退出");
    }

    private static void printTransactions() {
        System.out.println("------------------------");
        System.out.println("当前收支明细记录");
        System.out.println("------------------------");
        System.out.println("收支\t收支金额\t账户余额\t说明");
        for (int i = 0; i < transactionCount; i++) {
            System.out.println(transactions[i]); // 打印所有交易记录
        }
        // System.out.printf("当前余额：%.2f\n", baseFund); // 打印当前余额
    }

    // 收入模块
    private static void recordIncome(Scanner sc) {
        System.out.print("请输入收入描述：");
        sc.nextLine(); // 消耗掉换行符
        String desc = sc.nextLine(); // 获取收入描述, 返回一个 String 类型的值，包含用户输入的整行内容。
        System.out.print("请输入收入金额：");
        double amount = sc.nextDouble(); // 获取收入金额
        baseFund += amount; // 基本金累加
        transactions[transactionCount++] = new Transaction(desc, amount, baseFund, true); // 添加到交易记录数组
    }

    // 支出模块
    private static void recordExpense(Scanner sc) {
        System.out.print("请输入支出描述：");
        sc.nextLine(); // 消费换行符
        String desc = sc.nextLine(); // 获取支出描述
        System.out.print("请输入支出金额：");
        double amount = sc.nextDouble(); // 获取支出金额
        if (baseFund - amount < 0) {
            System.out.println("余额不足以记录此项支出。"); // 检查是否有足够的基本金来支付支出
        } else {
            baseFund -= amount; // 本金扣减
            transactions[transactionCount++] = new Transaction(desc, amount, baseFund,false); // 添加到交易记录数组
        }
    }
}

