## 基本概念
### 简介
- Nginx是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。
- 目前主流的Web服务器有Apache、Nginx、IIS、Tomcat等。
- Nginx是由Igor Sysoev为俄罗斯访问量第二的Rambler.ru站点开发的，为了解决C10K问题而开发的异步非阻塞架构的Web服务器。
- C10K问题：C10K问题是指服务器同时处理成千上万个客户端的连接请求的性能问题, 因为当时服务器软件都是单线程的, 性能会随着连接数的增加而下降。
- nginx在官方测试中能够支持5万并发连接，这个是理论值，实际上要看硬件配置。

### 原理
- Nginx使用了epoll模型，epoll模型是Linux内核2.6版本以后才有的，它是一种I/O多路复用技术，可以让一个线程同时监视多个文件描述符，当某个文件描述符就绪时，epoll能够通知应用程序。

## 安装配置

### 主要两种版本

- `主线版(mainline)`: 主线版是最新的版本, 功能最全, 会包含开发中的体验性模块, 也可能会有一些bug, 不建议生产环境使用。
- `稳定版(stable)`: 稳定版是经过长时间测试的版本, 功能稳定, 适合生产环境使用。

### 包管理器
#### linux
```shell
sudo apt-get update
sudo apt-get install nginx
```
#### mac
```shell
brew install nginx
```

#### windows
- scoop管理器
- choco管理器
- 直接下安装包最好

### 源码编译安装
```shell
# 下载
wget http://nginx.org/download/nginx-1.18.0.tar.gz
# 解压
tar -zxvf nginx-1.18.0.tar.gz
# 进入目录
cd nginx-1.18.0
# 配置
./configure
# 编译
make
# 安装
make install
```

### docker安装
```shell
docker pull nginx
```

## 常用命令

- **不同系统命令基本相同**
- **`mac`或者`Linux`输入无果可以在前面加个sudo试试**
- **`windows`命令行需要在nginx文件夹使用cmd**
- **`windows`包管理工具的用法比较麻烦不建议使用**

### 启动

- `mac`或者`Linux`
```shell
nginx
## or
sudo nginx
```

- `windows`
```shell
start nginx
```
### 指定配置文件启动

- 三平台通用
```shell
nginx -c 绝对路径
```

### 查看Nginx版本和编译参数等信息

- 三平台通用
```shell
nginx -V
```

#### 小v是查看版本号

- 三平台通用
```shell
nginx -v
```

### 检查配置文件是否正确

- 也可以用来定位配置文件位置

- 三平台通用
```shell
nginx -t
```



### 停止

- 快速和优雅的区别
  - 快速停止：立即停止服务，可能会丢失一些请求
  - 优雅停止：等待当前请求处理完毕后再停止服务

#### 快速停止Nginx

- 三平台通用
```shell
nginx -s stop
```

#### 优雅停止Nginx

- 三平台通用
```shell
nginx -s quit
```

### 重载配置文件

- 三平台通用
```shell
nginx -s reload
```

### 重新打开日志文件

- 三平台通用
```shell
nginx -s reopen
```

### 查看进程

- mac
```shell
ps -ef | grep nginx
```

- linux

```shell
ps -ef | grep nginx
```

- windows

```shell
tasklist | findstr nginx
```





## 反向代理

## 负载均衡

## 虚拟主机