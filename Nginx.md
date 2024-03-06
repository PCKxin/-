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

## 反向代理

## 负载均衡

## 虚拟主机