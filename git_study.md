## 版本控制系统

### 集中式

 - 例：svn

 - 所有文件都存放在中央服务器上，每个人都从中央服务器上取得最新的代码或者提交自己的代码
 - 优点：
     - 适合人数少的团队
     - 管理方便
 - 缺点：
     - 中央服务器单点故障
     - 依赖网络
     - 无法离线工作


### 分布式

 - 例：git

 - 每个人的电脑上都有一个完整的仓库，不需要联网就可以进行版本控制
 - 优点：
     - 无需联网
     - 无需中央服务器
     - 安全性高
 - 缺点：
     - 管理复杂

## git介绍

 - 主流的分布式版本控制系统

 - 免费 开源 分布式 的 版本控制系统

 - 所有操作都可以回溯

 - 仓库（Repository）
     - 介绍：
         - 记录文件或者文件夹的变化，以便将来查阅特定版本修订情况的地方
         - 每个文件都有一个完整的历史记录，可以追踪、恢复到任意版本
         - 可以在不同的机器上克隆仓库，相互之间不影响

## git安装

 - 官网下载安装包：https://git-scm.com/downloads

 - 安装完成后，打开git bash

 - 配置用户名和邮箱
     - git config --global user.name "用户名"
     - git config --global user.email "邮箱" （邮箱中间没有空格，可以忽略双引号）
         - --global 表示全局配置，对当前用户所有仓库有效 （最常用）
         - --local 表示本地配置，只对当前仓库有效
         - --system 表示系统配置，对系统所有登录的用户有效
 - 查看配置信息
     - git config --list

## git使用

 - 所有命令均以 git 开头
 - git --help 查看帮助

 - 新建仓库
     - git init
         - 会在当前目录下生成一个 .git 的隐藏文件夹，用于存放仓库的相关信息
         - 一般不会手动创建 .git 文件夹
         - 一般在项目根目录下执行 git init 命令，将当前项目变成一个仓库
         - 一个项目只需要执行一次 git init 命令即可
         - 一个项目只能有一个仓库
         - 仓库中的文件分为两种状态：已跟踪（tracked）和未跟踪（untracked）
             - 已跟踪：仓库中已经存在的文件
             - 未跟踪：仓库中不存在的文件
             - 仓库中的文件只能是已跟踪或者未跟踪状态，不能是其他状态
             - 仓库中的文件只能是已跟踪或者未跟踪状态，不能是其他状态
             - 仓库中的文件只能是已跟踪或者未跟踪状态，不能是其他状态
         - 手动创建：
             - mkdir 目录名
             - cd 目录名
             - git init
             - git init 目录名
             - 创建文件
                 - powershell：New-Item 文件名
                 - touch 文件名
                 - echo 内容 > 文件名
 - 克隆仓库
     - git clone 仓库地址
         - 会在当前目录下生成一个和仓库名相同的文件夹，用于存放仓库的相关信息
         - 一般不会手动创建 .git 文件夹
         - 一般在项目根目录下执行 git init 命令，将当前项目变成一个仓库
         - 一个项目只需要执行一次 git init 命令即可
         - 一个项目只能有一个仓库

 - 查看仓库状态
     - git status 
         - 会显示当前仓库中所有文件的状态
         - 红色: 未跟踪
         - 绿色: 已跟踪

 - 添加到暂存区
     - git add 文件名
         - 将文件从工作区域添加到暂存区域
         - 可以一次添加多个文件
         - git add . 将所有文件添加到暂存区域
         - git add -A 将所有文件添加到暂存区域
         - git add -u 将所有已跟踪文件添加到暂存区域
         - git add -A 和 git add -u 的区别
             - git add -A 将所有文件添加到暂存区域
             - git add -u 只将已跟踪文件添加到暂存区域
         - git add * 将所有文件添加到暂存区域
             - git add * 和 git add . 的区别
                 - git add * 只会添加当前目录下的文件
                 - git add . 会添加当前目录下的文件和子目录下的文件
             - git add *.后缀名
                 - 将当前目录下所有后缀名相同的文件添加到暂存区域
     - 取消暂存
         - git reset HEAD 文件名
             - 将暂存区域的文件取消暂存
             - 可以一次取消多个文件
             - git reset HEAD . 取消所有文件的暂存
             - git reset HEAD -A 取消所有文件的暂存
             - git reset HEAD -u 取消所有已跟踪文件的暂存

 - 提交到仓库区域
     - git commit -m "提交信息"
         - 将暂存区域的文件提交到仓库区域
         - -m "提交信息" 表示提交信息
         - 提交信息是对本次提交的描述，方便以后查看
     - git commit -a -m "提交信息"
         - 将所有已跟踪文件提交到仓库区域
         - -a 表示所有已跟踪文件
         - -m "提交信息" 表示提交信息
         - 提交信息是对本次提交的描述，方便以后查看
     - git commit -am "提交信息"
         - 将所有已跟踪文件提交到仓库区域
         - -a 表示所有已跟踪文件
         - -m "提交信息" 表示提交信息
         - 提交信息是对本次提交的描述，方便以后查看



 - 工作区域&文件状态
     - 工作区域：当前目录
         - 实际操作的目录
     - 暂存区域：.git/index 文件
         - 用于存放即将提交的修改内容
         - 暂存区域是一个文件，保存了下次将要提交的文件列表信息
     - 仓库区域：.git/objects 文件夹
         - 本地仓库，包含了完整的项目历史和元数据，是git存储代码和版本信息的主要位置

     - 流程
     - 工作区域 (git add)(提交)-> 暂存区域 (git commit)-> 仓库区域

     - 文件状态
         - 未跟踪（Untrack）：仓库中不存在的文件，未被git管理的文件
             - 新建的文件
             - 从其他地方拷贝过来的文件
             - 从其他分支切换过来的文件
             - 从其他分支合并过来的文件
             - 从其他仓库克隆
         - 已跟踪（Tracked）：仓库中已经存在的文件
           - 未修改（Unmodified）：文件没有发生变化，也没有提交到暂存区域
           - 已修改（Modified）：文件发生了变化，没有提交到暂存区域
           - 已暂存（Staged）：文件发生了变化，并且提交到了暂存区域


 - git rm 删除文件
     - 兼容各种版本，较麻烦
         - 先从工作区域删除文件，再从暂存区域删除文件，最后提交到仓库区域
         - rm file; 
         - git add file;
         - git commit -m "delete file"
     - 适用于git 2.6.0版本以上
         - git rm file // 从工作区域和暂存区域删除文件，最后提交到仓库区域
         - git rm --cached file // 从暂存区域删除文件，但是保留工作区域的文件
         - git rm -r 文件夹名 // 删除文件夹
         - git rm -rf 文件夹名 // 强制删除文件夹
         - git rm -rf . // 强制删除当前目录下所有文件
         - git rm -rf * // 强制删除当前目录下所有文件
         - git rm -r * // 递归删除当前目录下所有文件和子目录

         - git commit -m "delete file" // 提交到仓库区域

 - .gitignore 忽略文件
     - 用于指定不需要git管理的文件
     - 一般忽略的：
         - 编译生成的文件
         - 运行时生成的日志文件，缓存文件，配置文件，临时文件
         - 涉及隐私的文件，密码，身份，口令，密钥等
         - 
     - 用法：
         - 在仓库根目录下创建 .gitignore 文件
         - 文件路径支持通配符
             - 例如：*.txt 表示忽略所有后缀名为txt的文件
             - []: 表示匹配中括号中的任意一个字符
                 - 例如：[abc].txt 表示忽略a.txt，b.txt，c.txt
         - 文件路径支持正则表达式
             - 例如：[0-9].txt 表示忽略所有数字开头的文件
         - 文件路径支持注释
             - 例如：# 表示注释
         - 文件路径支持递归
             - 例如：/a/*.txt 表示忽略a目录下所有后缀名为txt的文件
         - 文件路径支持取反
             - 例如：!*.txt 表示不忽略所有后缀名为txt的文件


 - 日志
     - git log
         - 查看提交日志
         - 按q退出
     - git log --oneline
         - 查看提交日志，只显示一行,少信息简洁显示
    
 - 回退
     - git reset --soft
         - 回退到上一个版本,保留所有修改内容（工作区域和暂存区域）
         - git reset --soft 版本号
             - 回退到指定版本
             - 版本号可以是完整的，也可以是前几位
             - 版本号可以通过 git log 查看


     - git reset --hard
         - 回退到上一个版本,不保留修改
         - git reset --hard 版本号
             - 回退到指定版本
             - 版本号可以是完整的，也可以是前几位
             - 版本号可以通过 git log 查看
         - git reset --hard HEAD^
             - 回退到上一个版本
             - HEAD^ 表示上一个版本
             - HEAD^^ 表示上上一个版本
             - HEAD~n 表示上n个版本


     - git reset --mixed
         - 回退到上一个版本,保留修改内容（工作区域）
         - git reset --mixed 版本号
             - 回退到指定版本
             - 版本号可以是完整的，也可以是前几位
             - 版本号可以通过 git log 查看

     - 使用场景区别
         - 如果只是想撤销上一次提交，使用 --soft
         - 如果想撤销上一次提交，并且不想保留修改内容，使用 --hard
         - 如果想撤销上一次提交，并且想保留修改内容，使用 --mixed

 - 差异
     - 查看工作区域，暂存区域，本地仓库之间的差异
     - 查看不同版本间的差异

     - git diff
         - git diff 文件名
           - 默认比较工作区域和暂存区域的差异
           - 可以一次比较多个文件
         - git diff 版本号 文件名
           - 比较工作区域和本地仓库的差异
           - 可以一次比较多个文件
         - git diff 版本号1 版本号2
           - 比较两个版本之间的差异
           - 可以一次比较多个文件
         - git diff --cached
           - 比较暂存区域和本地仓库的差异
           - 可以一次比较多个文件
         - git diff --staged
           - 比较暂存区域和本地仓库的差异
           - 可以一次比较多个文件
         - git diff HEAD
           - 比较工作区域和本地仓库的差异
           - 可以一次比较多个文件
         - git diff HEAD HEAD^
           - 比较两个版本之间的差异
           - 可以一次比较多个文件
     - Binary files a.txt and b.txt differ
         - 如果比较的是二进制文件，会显示这个提示
         - 二进制文件无法查看差异

 - HEAD
     - 指向当前版本的指针
     - ^
         - HEAD 表示当前版本
         - HEAD^ 表示上一个版本
         - HEAD^^ 表示上上一个版本
         - HEAD~n 表示上n个版本
     - ~
         - HEAD~ 表示上一个版本
         - HEAD~n 表示上n个版本



 - 查看历史记录
     - git reflog
         - 查看所有操作记录
         - 可以查看所有版本的版本号
         - 可以查看所有操作的日志信息

 - 回溯历史记录
     - git reset --hard 版本号
         - 回溯到指定版本
         - 版本号可以是完整的，也可以是前几位
         - 版本号可以通过 git log 查看
         - 回溯版本号可以使用 git reflog 查看

 - 查看隐藏文件
     - powershell：ls -Force
     - cmd：dir /ah
     - git bash：ls -a

 - 查看所有文件（工作区）
     - powershell：ls
     - cmd：dir
     - git bash：ls

 - 查看暂存区域
     - powershell：git ls-files
     - cmd：git ls-files
     - git bash：git ls-files

 - 路径回退
     - powershell：cd ..
     - cmd：cd ..
     - git bash：cd ..

 - 路径多级前进
     - powershell：cd 目录名
     - cmd：cd 目录名
     - git bash：cd 目录名

 - 查看当前路径
     - powershell：pwd
     - cmd：cd
     - git bash：pwd

 - 删除文件
     - powershell：rm 文件名
     - cmd：del 文件名
     - git bash：rm 文件名

 - 删除文件内容
     - powershell：Clear-Content 文件名
     - cmd：type nul > 文件名
     - git bash：vim 文件名
         - :set fileencoding=utf-8 // 设置编码为utf8
         - :wq // 保存退出

 - 删除文件夹
     - powershell：rm -r 文件夹名
         - 提权：powershell -Command "Start-Process powershell -Verb runAs" // 以管理员身份打开powershell
     - cmd：rd /s/q 文件夹名
     - git bash：\rm -rf 文件夹名

 - 查看文件内容
     - powershell：cat 文件名
     - cmd：type 文件名
     - git bash：cat 文件名

 - 修改文件名
     - powershell：mv 旧文件名 新文件名
     - cmd：ren 旧文件名 新文件名
     - git bash：mv 旧文件名 新文件名

 - 复制文件
     - powershell：cp 旧文件名 新文件名
     - cmd：copy 旧文件名 新文件名
     - git bash：cp 旧文件名 新文件名

 - 复制文件夹
     - powershell：cp -r 旧文件夹名 新文件夹名
     - cmd：xcopy 旧文件夹名 新文件夹名 /s /e
     - git bash：cp -r 旧文件夹名 新文件夹名

 - 编辑文件内容
     - powershell：notepad 文件名
     - cmd：notepad 文件名
     - git bash：vim 文件名

 - 转换文件编码
     - powershell：Set-Content -Encoding utf8 文件名 // 设置编码为utf8
     - cmd：chcp 65001 // 设置编码为utf8
     - git bash：vim 文件名
         - :set fileencoding=utf-8 // 设置编码为utf8


 - 傻逼win下格式问题导致差异对比和忽略设置问题
     - 解决方案：所有格式修改为UTF-8

## github 使用

### SSH&HTTPS

 - SSH
     - 生成SSH密钥
         - ssh-keygen -t rsa -C "邮箱"
         - 一路回车
         - 会在用户目录下生成 .ssh 文件夹
         - 会在 .ssh 文件夹下生成 id_rsa 和 id_rsa.pub 两个文件
         - id_rsa 是私钥，不能泄露
         - id_rsa.pub 是公钥，可以公开

     - 生成ssh密钥 自定义法
         - ssh-keygen -t rsa -b 4096
         - 生成过一次后，再次生成时，需要在第一步输入文件名，否则会覆盖之前的文件
         - 一路回车
         - 会在用户目录下生成 .ssh 文件夹
         - 会在 .ssh 文件夹下生成 id_rsa 和 id_rsa.pub 两个文件
         - id_rsa 是私钥，不能泄露
         - id_rsa.pub 是公钥，可以公开

     - 添加SSH密钥
         - 登录github
         - 点击头像 -> settings -> SSH and GPG keys -> New SSH key
         - Title: 自定义
         - Key: 将 id_rsa.pub 文件中的内容复制到这里
         - 点击 Add SSH key
     - 测试SSH密钥
         - ssh -T
         - 如果出现 You've successfully authenticated, but GitHub does not provide shell access. 表示成功
         - 如果出现 Permission denied (publickey). 表示失败
     - 使用SSH协议克隆仓库
         - git clone 仓库地址
         - 会在当前目录下生成一个和仓库名相同的文件夹，用于存放仓库的相关信息


### 关联本地仓库和远程仓库

 - 关联本地仓库和远程仓库
     - git remote add origin 仓库地址
         - 将本地仓库和远程仓库关联
         - origin 是远程仓库的别名，可以自定义
         - 一个本地仓库只能关联一个远程仓库
         - 一个远程仓库可以关联多个本地仓库
     - git remote -v
         - 查看本地仓库关联的远程仓库
     - git remote rm origin
         - 删除本地仓库关联的远程仓库
     - git remote set-url origin 仓库地址
         - 修改本地仓库关联的远程仓库地址


### 推送到远程仓库

注：origin 是远程仓库的别名，可以自定义

 - 推送到远程仓库
     - git push -u origin main
         - 将本地仓库的内容推送到远程仓库
         - -u origin main 表示将本地仓库的main分支推送到远程仓库的main分支
         - 第一次推送时，需要加上 -u origin main
         - 以后推送时，可以省略 -u origin main
     - git push
         - 将本地仓库的内容推送到远程仓库
         - 以后推送时，可以省略 -u origin main
     - git push origin main
         - 将本地仓库的内容推送到远程仓库
         - 以后推送时，可以省略 -u origin main
     - git push origin 分支名
         - 将本地仓库的内容推送到远程仓库
         - 以后推送时，可以省略 -u origin main
         - 分支名可以是main，也可以是其他分支
     - git push origin :分支名
         - 删除远程仓库的分支
         - 分支名可以是main，也可以是其他分支
     - git push origin --delete 分支名
         - 删除远程仓库的分支
         - 分支名可以是main，也可以是其他分支

     - git push --set-upstream GitStudyTestRepo main
         - 将本地仓库的内容推送到远程仓库
         - --set-upstream GitStudyTestRepo main 表示将本地仓库的main分支推送到远程仓库的main分支
         - 本地与远程仓库不同名时，需要加上 --set-upstream GitStudyTestRepo main

 - 拉取远程仓库，并合并更新
     - git pull
         - 将远程仓库的内容拉取到本地仓库
         - 一般在本地仓库执行
     - git pull origin main
         - 将远程仓库的内容拉取到本地仓库
         - 一般在本地仓库执行
     - git pull origin 分支名
         - 将远程仓库的内容拉取到本地仓库
         - 一般在本地仓库执行
         - 分支名可以是main，也可以是其他分支
     - git pull origin :分支名
         - 删除远程仓库的分支
         - 分支名可以是main，也可以是其他分支
     - git pull origin --delete 分支名
         - 删除远程仓库的分支
         - 分支名可以是main，也可以是其他分支
     - git pull origin main:main
         - 将远程仓库的main分支拉取到本地仓库的main分支
         - 一般在本地仓库执行
     - git pull origin 分支名:分支名
         - 将远程仓库的分支拉取到本地仓库的分支
         - 一般在本地仓库执行
         - 分支名可以是main，也可以是其他分支

 - 获取远程仓库修改 ，不合并更新
     - git fetch
         - git pull 冲突时，可以使用 git fetch
         - 获取远程仓库的修改
         - 一般在本地仓库执行

 - 分支操作
     - git branch
         - 查看本地仓库的分支
     - git branch -a
         - 查看本地仓库和远程仓库的分支
     - git branch 分支名
         - 创建本地仓库的分支

     - git branch -d 分支名
         - 删除本地仓库已经合并的分支

     - git branch -D 分支名
         - 强制删除本地仓库的分支
         - 一般在分支有未提交的修改时使用

     - git branch -M 分支名
         - 修改本地仓库的分支名
     - git branch -r
         - 查看远程仓库的分支
     - git branch -r -d origin/分支名
         - 删除远程仓库的分支

     - 切换分支
         - checkout
             - git checkout 分支名
                 - 切换到指定分支
                 - 分支名可以是main，也可以是其他分支
             - git checkout -b 分支名
                 - 创建并切换到指定分支
                 - 分支名可以是main，也可以是其他分支
             - 注意：切换分支时，必须保证当前分支没有未提交的修改
                 - 出现与分支同名文件时，会提示错误，需要先提交修改或者删除文件，或者使用switch

         - switch
             - git switch 分支名
                 - 切换到指定分支
                 - 分支名可以是main，也可以是其他分支
             - git switch -c 分支名
                 - 创建并切换到指定分支
                 - 分支名可以是main，也可以是其他分支
             - 注意：切换分支时，要保证当前分支没有未提交的修改

      - 合并分支
          - git merge
              - git merge 分支名
                  - 将指定分支合并到当前分支
                  - 分支名可以是main，也可以是其他分支
              - git merge --no-ff 分支名
                  - 将指定分支合并到当前分支
                  - 分支名可以是main，也可以是其他分支
                  - --no-ff 表示禁用Fast forward模式
                  - Fast forward模式：当分支之间没有冲突时，会直接合并，不会产生新的提交
                  - --no-ff 模式：当分支之间没有冲突时，会产生新的提交

              - git merge --abort
                  - 取消合并
                  - 一般在合并冲突时使用

              - git merge --continue
                  - 继续合并
                  - 一般在合并冲突时使用

              - git merge --quit
                  - 退出合并
                  - 一般在合并冲突时使用




            


