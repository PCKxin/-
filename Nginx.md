## 基本概念
### 简介
- Nginx是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMTP服务器。
- 目前主流的Web服务器有Apache、Nginx、IIS、Tomcat等。
- Nginx是由Igor Sysoev为俄罗斯访问量第二的Rambler.ru站点开发的，为了解决C10K问题而开发的异步非阻塞架构的Web服务器。
- C10K问题：C10K问题是指服务器同时处理成千上万个客户端的连接请求的性能问题, 因为当时服务器软件都是单线程的, 性能会随着连接数的增加而下降。
- nginx在官方测试中能够支持5万并发连接，这个是理论值，实际上要看硬件配置。

### 原理
- Nginx使用了epoll模型，epoll模型是Linux内核2.6版本以后才有的，它是一种I/O多路复用技术，可以让一个线程同时监视多个文件描述符，当某个文件描述符就绪时，epoll能够通知应用程序。

### 进程模型

- Nginx是一个多进程模型，主要包括一个master进程和多个worker进程。
- `master`进程主要负责加载配置文件、启动工作进程、非停升级等工作。
- `worker`进程主要负责处理请求，每个`worker`进程都是一个独立的进程，互不影响。
- `master`进程和`worker`进程之间通过共享内存进行通信。
- `worker`进程的数量可以通过配置文件进行调整，一般设置为CPU核心数的2倍。
- Nginx的进程模型是非阻塞的，一个worker进程可以同时处理多个请求。




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

## nginx配置文件详解

```shell

# user 用户组/用户; # 指定nginx运行的用户和用户组
# user  nobody; # nobody是一个特殊的用户，只有读权限，不能写

# worker_processes 1; # 指定nginx启动的worker进程数，通常设置为CPU核心数的2倍，以提高并发处理能力
worker_processes  1;

# error_log 日志路径; # 指定错误日志的路径和记录级别
error_log  logs/error.log; # 默认记录级别为error，即只记录错误日志

# error log级别 有四个级别 debug、info、notice、error
# debug级别 表示调试信息，记录最详细的日志
# info级别 表示记录详细信息，但没有debug那么详细
# notice级别 表示记录一般性信息
# error级别 表示记录错误信息，通常用于生产环境

#error_log  logs/error.log  notice; # 取消注释后，记录级别为notice
#error_log  logs/error.log  info; # 取消注释后，记录级别为info

#pid 表示nginx的进程id文件
#pid        logs/nginx.pid; # 指定nginx的进程id文件路径

# events 指定nginx的事件模型相关的配置
events {
    # worker_connections 表示每个worker进程可以同时处理的最大连接数
    worker_connections  1024;
}

# http 指定http协议相关的配置
http {
    # include 包含其他配置文件，一般用来引入其他配置文件，如mime.types
    include       mime.types; # mime.types文件定义了多种文件扩展名与文件类型的映射
    # default_type 指定默认文件类型，如果未能匹配到具体类型，则使用此默认类型
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"'; 

    # 自定义日志格式，main为格式名称，记录客户端IP、用户、时间、请求信息等

    #access_log  logs/access.log  main; 
    # 指定访问日志的路径及使用的日志格式main

    sendfile        on; # 启用sendfile，可以提高文件传输效率
    #tcp_nopush     on; # 取消注释后，可在传输大文件时提高性能

    #keepalive_timeout  0; # 取消注释后，设置为0秒，表示关闭keepalive功能
    keepalive_timeout  65; # 保持连接的超时时间为65秒

    #gzip  on; # 取消注释后，启用gzip压缩，可以减少响应内容大小，加快传输

    server {
        listen       5500; # 监听端口号5500
        server_name  localhost; # 指定服务器名称为localhost

        #charset koi8-r; # 取消注释后，指定字符集为koi8-r

        #access_log  logs/host.access.log  main; 
        # 指定此server块的访问日志路径及使用的日志格式main

        location / {
            root   html; # 指定根目录为html文件夹
            index  index.html index.htm; # 默认首页文件为index.html或index.htm
        }

        #error_page  404              /404.html; 
        # 取消注释后，当发生404错误时，使用/404.html页面

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html; # 配置服务器错误页面的重定向
        location = /50x.html { # 当访问/50x.html时，处理如下
            root   html; # 指定根目录为html文件夹
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ { # 取消注释并配置后，用于将PHP脚本请求代理到Apache
        #    proxy_pass   http://127.0.0.1; # 代理地址为127.0.0.1（本地）上的Apache服务器
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ { # 取消注释并配置后，用于将PHP脚本请求传递给FastCGI服务器
        #    root           html; # 指定根目录为html文件夹
        #    fastcgi_pass   127.0.0.1:9000; # FastCGI服务器地址为127.0.0.1:9000
        #    fastcgi_index  index.php; # FastCGI索引文件为index.php
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name; # 设置脚本文件名参数
        #    include        fastcgi_params; # 引入默认的FastCGI参数
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht { # 取消注释后，禁止访问.htaccess文件
        #    deny  all; # 拒绝所有访问
        #}
    }

    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server { # 取消注释并配置后，定义另一个虚拟主机
    #    listen       8000; # 监听端口号8000
    #    listen       somename:8080; # 监听somename的8080端口
    #    server_name  somename  alias  another.alias; # 指定服务器名称和别名

    #    location / {
    #        root   html; # 指定根目录为html文件夹
    #        index  index.html index.htm; # 默认首页文件为index.html或index.htm
    #    }
    #}

    # HTTPS server
    #
    #server { # 取消注释并配置后，启用HTTPS服务器
    #    listen       443 ssl; # 监听443端口并启用SSL
    #    server_name  localhost; # 指定服务器名称为localhost

    #    ssl_certificate      cert.pem; # 指定SSL证书文件
    #    ssl_certificate_key  cert.key; # 指定SSL证书密钥文件

    #    ssl_session_cache    shared:SSL:1m; # 设置SSL会话缓存
    #    ssl_session_timeout  5m; # 设置SSL会话超时时间为5分钟

    #    ssl_ciphers  HIGH:!aNULL:!MD5; # 指定SSL加密套件
    #    ssl_prefer_server_ciphers  on; # 优先使用服务器端的加密套件

    #    location / {
    #        root   html; # 指定根目录为html文件夹
    #        index  index.html index.htm; # 默认首页文件为index.html或index.htm
    #    }
    #}
}

```

## 反向代理

- 反向代理是指代理服务器接收客户端的请求，然后将请求转发给内部服务器，最后将内部服务器的响应返回给客户端。
- 隐藏了真实服务器的信息，提高了安全性。
- 可以实现负载均衡，提高性能。
- 可以实现缓存，提高访问速度。
- 可以实现访问控制，提高安全性。
- 可以实现SSL加密，提高安全性。
- 可以实现压缩，提高传输速度。
- 可以实现静态资源访问，提高性能。

### 步骤

#### 案例1 重定向
  - 条件
    - 有两个服务器，一个是`www.baidu.com`，一个是`www.google.com`
    - 本地访问`www.baidu.com`，实际上访问的是`www.google.com`
  - 实现
    - 修改`hosts`文件，将`www.baidu.com`指向本地
    - 修改`nginx`配置文件，将`www.baidu.com`指向`www.google.com`
        - ```shell
          server {
              listen 80;
              server_name www.baidu.com;
              location / {
                  proxy_pass http://www.google.com;
              }
          }
          ```
    - 重启`nginx`服务

#### 案例2 3个端口轮询访问

  - 条件
    - 有三个服务器，分别是`www.baidu.com`、`www.google.com`、`www.bing.com`
    - 本地访问`search`，实际轮询访问`www.google.com`、`www.bing.com`、`www.baidu.com`
  - 实现
    - 修改`hosts`文件，将`www.baidu.com`指向本地
    - 修改`nginx`配置文件，将`www.baidu.com`指向`www.google.com`、`www.bing.com`、`www.baidu.com`
        - ```shell
          upstream search {
              server www.google.com;
              server www.bing.com;
              server www.baidu.com;
          }
          server {
              listen 80;
              server_name search;
              location / {
                  proxy_pass http://search;
              }
          }
          ```



### 修改`hosts`文件

- `mac`或者`Linux`路径
```shell
/etc/hosts
```

- `windows`路径
```shell
C:\Windows\System32\drivers\etc\hosts
```

### 修改`nginx`配置文件

- `mac`或者`Linux`路径
```shell
/usr/local/etc/nginx/nginx.conf
```

- `windows`路径
```shell
nginx安装目录\conf\nginx.conf
```


### 重启`nginx`服务

- 三平台通用
```shell
nginx -s reload
```

## 负载均衡

- 负载均衡是指将请求分发到多个服务器上，以提高性能和可用性。
- 负载均衡有多种算法，如轮询、加权轮询、最少连接、IP哈希等。

### 轮询算法

- 轮询算法是指按照顺序将请求分发到多个服务器上，每个请求都会按照顺序分发到不同的服务器上。
- 轮询算法适用于每个服务器的性能相同的情况。
- 轮询算法的优点是简单、公平，缺点是无法根据服务器的性能进行动态调整。
- 配置案例如下：
  - ```shell
    upstream search {
        server www.google.com; # 第一个服务器
        server www.bing.com; # 第二个服务器
        server www.baidu.com; # 第三个服务器
    }
    server {
        listen 80; # 监听端口号80
        server_name search; # 指定服务器名称为search
        location / { # 处理请求
            proxy_pass http://search; # 负载均衡
        }
    }
    ```

### 加权轮询算法

- 加权轮询算法是指按照权重将请求分发到多个服务器上，每个请求都会按照权重分发到不同的服务器上。
- 加权轮询算法适用于每个服务器的性能不同的情况。
- 加权轮询算法的优点是可以根据服务器的性能进行动态调整，缺点是复杂、不公平。

- 配置案例如下：
  - ```shell
    upstream search {
        server www.google.com weight=1; # 第一个服务器，权重为1
        server www.bing.com weight=2; # 第二个服务器，权重为2
        server www.baidu.com weight=3; # 第三个服务器，权重为3
    }
    server {
        listen 80; # 监听端口号80
        server_name search; # 指定服务器名称为search
        location / { # 处理请求
            proxy_pass http://search; # 负载均衡
        }
    }
    ```


### 最少连接算法

- 最少连接算法是指将请求分发到当前连接数最少的服务器上，以提高性能和可用性。
- 最少连接算法适用于每个服务器的性能不同的情况。
- 最少连接算法的优点是可以根据服务器的性能进行动态调整，缺点是复杂、不公平。

- 用法和加权轮询类似，只需要将`weight`改为`least_conn`即可。

- 配置案例如下：
  - ```shell
    upstream search {
        server www.google.com least_conn; # 第一个服务器
        server www.bing.com least_conn; # 第二个服务器
        server www.baidu.com least_conn; # 第三个服务器
    }
    server {
        listen 80; # 监听端口号80
        server_name search; # 指定服务器名称为search
        location / { # 处理请求
            proxy_pass http://search; # 负载均衡
        }
    }
    ```

### IP哈希算法

- 同一个IP地址的请求总是分发到同一个服务器上，以提高性能和可用性。
- IP哈希算法是指将请求分发到根据IP地址哈希值计算出的服务器上，以提高性能和可用性。
- IP哈希算法适用于每个服务器的性能相同的情况。
- IP哈希算法的优点是简单、公平，缺点是无法根据服务器的性能进行动态调整。

- 用法和加权轮询类似，只需要将`weight`改为`ip_hash`即可。

- `ip_hash` 放在`upstream`中, 可以放在第一行也可以像其他方式一样放在每个`server`中。

- 配置案例如下：
  - ```shell
    upstream search {
        ip_hash; # IP哈希算法
        server www.google.com; # 第一个服务器
        server www.bing.com; # 第二个服务器
        server www.baidu.com; # 第三个服务器
    }
    server {
        listen 80; # 监听端口号80
        server_name search; # 指定服务器名称为search
        location / { # 处理请求
            proxy_pass http://search; # 负载均衡
        }
    }
    ```



## 虚拟主机

- 虚拟主机是指在一台服务器上配置多个域名，以提高性能和可用性。
- 虚拟主机有多种类型，如基于IP地址的虚拟主机、基于端口号的虚拟主机、基于域名的虚拟主机等。
- 虚拟主机可以实现多个网站共享一个服务器，提高资源利用率。
- 虚拟主机可以实现多个网站共享一个IP地址，提高性能和可用性。
- 虚拟主机可以实现多个网站共享一个端口号，提高性能和可用性。

### 基于IP地址的虚拟主机

- 基于IP地址的虚拟主机是指在一台服务器上配置多个IP地址，每个IP地址对应一个域名。
- 基于IP地址的虚拟主机适用于每个网站的性能相同的情况。
- 基于IP地址的虚拟主机的优点是简单、公平，缺点是无法根据网站的性能进行动态调整。

- 配置案例如下：
  - ```shell
    server {
        listen 80; # 监听端口号80
        server_name web1; # 指定服务器名称为web1
        location / { # 处理请求
            root /var/www/web1; # 指定根目录为/var/www/web1
            index index.html; # 默认首页文件为index.html
        }
    }
    server {
        listen 80; # 监听端口号80
        server_name web2; # 指定服务器名称为web2
        location / { # 处理请求
            root /var/www/web2; # 指定根目录为/var/www/web2
            index index.html; # 默认首页文件为index.html
        }
    }
    ```

- 配置案例访问`web1`和`web2`的方式如下：
  - `http://web1`
  - `http://web2`

### 基于端口号的虚拟主机

- 基于端口号的虚拟主机是指在一台服务器上配置多个端口号，每个端口号对应一个域名。
- 基于端口号的虚拟主机适用于每个网站的性能相同的情况。

- 配置案例如下：
  - ```shell
    server {
        listen 80; # 监听端口号80
        server_name web1; # 指定服务器名称为web1
        location / { # 处理请求
            root /var/www/web1; # 指定根目录为/var/www/web1
            index index.html; # 默认首页文件为index.html
        }
    }
    server {
        listen 81; # 监听端口号81
        server_name web2; # 指定服务器名称为web2
        location / { # 处理请求
            root /var/www/web2; # 指定根目录为/var/www/web2
            index index.html; # 默认首页文件为index.html
        }
    }
    ```

- 配置案例访问`web1`和`web2`的方式如下：
  - `http://localhost:80`
  - `http://localhost:81`

### 基于域名的虚拟主机

- 基于域名的虚拟主机是指在一台服务器上配置多个域名，每个域名对应一个网站。
- 基于域名的虚拟主机适用于每个网站的性能相同的情况。

- 配置案例如下：
  - ```shell
    server {
        listen 80; # 监听端口号80
        server_name web1; # 指定服务器名称为web1
        location / { # 处理请求
            root /var/www/web1; # 指定根目录为/var/www/web1
            index index.html; # 默认首页文件为index.html
        }
    }
    server {
        listen 80; # 监听端口号80
        server_name web2; # 指定服务器名称为web2
        location / { # 处理请求
            root /var/www/web2; # 指定根目录为/var/www/web2
            index index.html; # 默认首页文件为index.html
        }
    }
    ```

- 配置案例访问`web1`和`web2`的方式如下：
  - `http://web1`
  - `http://web2`


