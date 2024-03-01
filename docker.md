## 基本概念

### 简介
Docker是一个用于 **构建(bulid)** **运行(run)** **传送(share)** 应用程序的平台

可以将应用程序打包成一个容器，然后发布到任
何地方。

常见打包包括: 操作系统, 运行时环境, 依赖库, 应用程序, 配置文件,启动命令等。

这样就解决了环境不一致的问题，使得应用程序可以在任何地方运行。

### 为什么使用Docker

- 比如, 现在有一个流行开发环境: 
    - 前端: vue
    - 后端: SpringBoot
    - 数据库: MySQL
    - 缓存: Redis
    - 负载均衡: Nginx
    - 等等
 
- 所需开发环境需要
    - 安装NodeJS环境
    - 安装npm依赖
    - 安装JDK
    - 安装各种第三方依赖
    - 安装MySQL
    - 环境变量, 启动脚本
    - 配置Redis
    - 配置Nginx
    - 等等

- 重复安装这些环境, 配置这些环境, 会浪费大量时间, 而且很容易出错。

- 使用Docker, 可以将这些环境打包成一个容器, 然后放到任何地方使用

### 与传统虚拟机的区别

- 传统虚拟机(虚拟化Hypervisor)
    - 完整的操作系统
    - 完全隔离
    - 启动慢, 占用资源多, 难以迁移

- Docker和容器是两个不同的概念
    - Docker是容器的一种实现也就是平台, 用于构建,运行,传送容器
    - 容器是一种轻量级的虚拟化(Hypervisor)技术, 也是一个独立的运行环境, 用于运行应用程序

- 两者区别在于
    - 容器是应用程序级别的虚拟化, 而不是操作系统级别的虚拟化
    - 容器共享宿主机的操作系统内核, 而不是像传统虚拟机一样, 每个虚拟机都有自己的操作系统内核
    - 容器启动快, 占用资源少, 易于迁移

### 基本原理和概念

- 体系架构
    - 使用的是`Client-Server`架构, 也就是`C/S`架构, 客户端和服务端分离
    - `Docker client` 和 `Docker Daemon`通过Socket或RESTful API进行通信, 客户端和服务端可以运行在同一台机器, 也可以运行在不同的机器
        - `Docker client`: 用户使用的命令行工具, 用于向Docker Daemon发送请求
        - `Docker Daemon`: 服务端的守护进程, 用于管理镜像, 容器, 网络, 卷等, 处理客户端请求后, 返回结果
            - 守护进程的意思是, 一直在后台运行, 不会退出

- 镜像(Image)
    - 一个只读的模板, 用于创建容器
    - 镜像是一个文件, 包含了应用程序运行所需的所有依赖, 包括操作系统, 运行时环境, 应用程序, 配置文件, 启动命令等
    - 镜像是一个多层文件系统, 每一层都是一个镜像, 通过这种方式, 可以复用镜像, 减少存储空间

- 容器(Container)
    - 一个镜像的运行实例
    - 容器是一个独立的运行环境, 包括了应用程序, 运行时环境, 系统工具, 系统库, 系统配置等
    - 容器是一个独立的进程, 由Docker引擎启动, 运行, 停止, 删除
  
- 仓库(Repository)
    - 用于存储镜像的地方
    - 仓库是一个集中存放镜像的地方, 可以理解为代码仓库
    - 仓库分为公有仓库和私有仓库, 公有仓库是开放的, 任何人都可以下载, 私有仓库是私有的, 只有授权的用户可以下载

### 容器化和Dockerfile

- 容器化(containerization)
    - 将应用程序打包成一个容器, 然后发布到任何地方
    - 容器化的好处是, 可以将应用程序和运行环境打包在一起, 使得应用程序可以在任何地方运行
    - 用法三个步骤: 创建Dockfile, 用Dockerfile构建镜像, 运行容器

- Dockerfile
    - 用于构建镜像的文件
    - Dockerfile是一个文本文件, 包含了一系列命令, 用于构建镜像
    - 通过Dockerfile, 可以将应用程序和运行环境打包在一起, 使得应用程序可以在任何地方运行

## 常用命令

### 日常操作

- `docker version` 查看docker版本
- `docker info` 查看docker系统信息
- `docker --help` 查看docker帮助文档
- `docker [command] --help` 查看docker命令帮助文档
- `docker login/logout` 登录/登出docker仓库

### Dockerfile常用命令

- `FROM` 指定基础镜像
    - 指定基础镜像，必须为 Dockerfile的第⼀条指令
    - 参数: `FROM <镜像名>:<标签>`
    - 例: `FROM node:14-alpine`
        - alpine是一个轻量级的Linux发行版, 适合用于容器

- `ADD` 复制文件
    - ⽤于将⽂件复制到镜像中，源可以是 URL或者本地⽂件，也可以是⼀个压缩⽂件（⾃动解压）
    - 参数: `ADD <源路径> <目标路径>`
    - 例: `ADD package.json /app/`

- `COPY` 复制文件
    - ⽤于将⽂件复制到镜像中，源只能是本地⽂件，不能是 URL 或者压缩⽂件
    - 参数: `COPY <--chown=<user>:<group><源路径> <目标路径>`
        - `--chown=<user>:<group>` 指定⽂件的所属⽤户和组
    - 例: `COPY package.json /app/`

- `RUN` 执⾏命令
    - ⽤于执⾏命令，可以执⾏任何命令，包括安装软件，修改配置等 
    - 参数: `RUN <命令>`
    - 例: `RUN npm install`

- `WORKDIR` ⼯作⽬录
    - ⽤于指定⼯作⽬录，可以使⽤多个 WORKDIR指令，如果使⽤相对路径，则是相对于上⼀条 WORKDIR指令所指定的⽬录
    - 参数: `WORKDIR <⽬录路径>`
    - 例: `WORKDIR /app`

- `ENV` 环境变量
    - ⽤于设置环境变量，可以使⽤多个 ENV指令
    - 参数: `ENV <键> <值>`
    - 参数: `ENV <键1>=<值1> <键2>=<值2> ...`
    - 例: `ENV NODE_ENV production`

- `CMD` 容器启动命令
    - ⽤于指定默认的容器主进程，每个 Dockerfile中只能有⼀条 CMD指令，如果有多条，则只有最后⼀条会⽣效
    - 参数: `CMD <命令> /`
    - 参数: `CMD ["<可执行程序>", "<参数1>", "<参数2>", ...]`
    - 例: `CMD ["npm", "start"]`

- `EXPOSE` 暴露端⼝
    - ⽤于指定容器运⾏时监听的端⼝，可以使⽤多个 EXPOSE指令
    - 参数: `EXPOSE <端⼝>`
    - 例: `EXPOSE 3000`

- `VOLUME` 挂载⽬录
    - ⽤于定义匿名卷（持久化⽬录）
    - 参数: `VOLUME <⽬录路径>`
    - 参数: `VOLUME ["<⽬录路径1>", "<⽬录路径2>", ...]`
    - 例: `VOLUME /app/public`

### 镜像管理

- `docker images` & `docker images ls` 查看镜像

- `docker search <镜像名>` 搜索镜像

- `docker pull <镜像名>:<标签>` 拉取镜像

- `docker push <镜像名>:<标签>` 推送镜像

- 删除镜像
    - `docker rmi <镜像名>:<标签>` 删除镜像
    - `docker rmi -f <镜像名>:<标签>` 强制删除镜像
    - `docker image rm <镜像名>:<标签>` 删除镜像
    - `docker image prune` 删除所有悬空(不再使用)的镜像
    - `docker rmi $(docker images -q)` 删除所有镜像
    - `docker rmi $(docker images -q -f "dangling=true")` 删除所有悬空(不再使用)的镜像
    - `docker rmi $(docker images -q -f "before=<镜像名>:<标签>")` 删除所有早于指定镜像的镜像
    - `docker rmi $(docker images -q -f "label=<标签>")` 删除所有指定标签的镜像
    - `docker rmi $(docker images -q -f "reference=<镜像名>:<标签>")` 删除所有指定镜像的镜像
    - `docker rmi $(docker images -q -f "since=<镜像名>:<标签>")` 删除所有晚于指定镜像的镜像

- 保存镜像
    - `docker save <镜像名> -o 文件名` 保存镜像到文件
        - -o 指定输出文件
    - `docker save <镜像名> > 文件名` 保存镜像到文件
        - > 指定输出文件 
    - 例: `docker save -o node:14-alpine node:14-alpine.tar`

- 导入(加载)对象
    - `docker load -i 文件名` 从文件加载镜像
        - -i 指定输入文件
    - 例: `docker load -i node:14-alpine.tar`

- 查看镜像历史
    - `docker history <镜像名>:<标签>` 查看镜像历史

- 查看镜像信息
    - `docker inspect <镜像名>:<标签>` 查看镜像信息

- 将文件系统导入为镜像
    - `docker import <文件名>` 将文件系统导入为镜像
    - 文件系统可以是一个文件, 也可以是一个目录

- 从容器创建镜像
    - `docker commit <容器名> <镜像名>:<标签>` 提交容器为镜像
    - 例: `docker commit mycontainer node:14-alpine`

### 容器管理

- `docker create <镜像名>:<标签>` 创建容器
    - 创建容器, 但不启动容器
    - 返回容器ID

- `docker run <镜像名>:<标签>` 运行容器
    - 创建并启动容器
    - 返回容器ID

- `docker start <容器ID>` 启动容器
    - 启动已经停止的容器

- `docker stop <容器ID>` 停止容器
    - 停止正在运行的容器

- `docker kill <容器ID>` 强制停止容器
    - 强制停止正在运行的容器

- `docker restart <容器ID>` 重启容器

- 查看正在运行的容器
    - `docker ps`
    - `docker container ls`

- 查看所有容器, 包括正在运行的容器和已经停止的容器
    - `docker ps -a`
    - `docker container ls -a`

- 以交互模式进入容器
    - `docker exec it <容器ID> bash` bash是容器中的shell, 也可以用/bin/bash
    - `docker attach <容器ID>` 

- 导出容器
    - `docker export <容器ID> -o 文件名` 导出容器为文件
    - `docker export <容器ID> > 文件名` 导出容器为文件

- 删除容器
    - `docker rm <容器ID>` 删除容器
    - `docker rm -f <容器ID>` 强制删除容器
    - `docker container rm <容器ID>` 删除容器
    - `docker container rm -f <容器ID>` 强制删除容器

- `docker import <文件名>` 导入容器快照
    - 从文件导入容器快照

- `docker port <容器ID>` 查看容器端口映射

- `docker top <容器ID>` 查看容器进程

- `docker cp 文件名 <容器ID>:<目标路径>` 从容器复制文件到宿主机
    - 从容器复制文件到宿主机指定路径

- `docker diff <容器ID>` 查看容器文件系统的变化

- `docker stats <容器ID>` 查看容器资源使用情况


### 容器运行

- **语法格式:**
    - `docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`
        - `[OPTIONS]` 选项
        - `IMAGE` 镜像
        - `[COMMAND]` 容器启动命令
        - `[ARG...]` 容器启动命令参数
        - 选项和参数可以有多个

#### 创建 运行并命名容器

- `docker run --name <容器名> <镜像名>:<标签>` 创建并运行容器
    - `--name` 指定容器名
    - `<镜像名>:<标签>` 指定镜像名和标签

#### 创建一个容器并后台运行

- `docker run -d <镜像名>:<标签>` 创建并后台运行容器
    - `-d` 后台运行
    - `<镜像名>:<标签>` 指定镜像名和标签

#### 创建一个容器并指定容器端口和宿主机端口映射

- `docker run -p <宿主机端口>:<容器端口> <镜像名>:<标签>` 创建并指定容器端口和宿主机端口映射
    - `-p` 指定宿主机端口和容器端口的映射

#### 创建一个容器并指定端口映射(随机分配)

- `docker run -P <镜像名>:<标签>` 创建并指定端口映射(随机分配)
    - `-P` 随机分配宿主机端口

#### 创建⼀个容器并指定环境变量

- `docker run -e <key=value> <镜像名>:<标签>` 创建并指定环境变量
    - `-e` 指定环境变量

#### 创建⼀个容器并指定⼯作⽬录

- `docker run -w <⽬录路径> <镜像名>:<标签>` 创建并指定⼯作⽬录
    - `-w` 指定⼯作⽬录

#### 创建一个容器并指定容器名称

- `docker run --name <容器名> <镜像名>:<标签>` 创建并指定容器名称
    - `--name` 指定容器名称

#### 创建一个容器并在容器中执行命令(交互模式)

- `docker run <镜像名>:<标签> [command]` 创建并在容器中执行命令
    - `[command]` 容器启动命令

#### 创建⼀个容器，并指定容器名称、后台运⾏、端⼝映射、环境变量和⼯作⽬录

- `docker run -d -p <宿主机端口>:<容器端口> -e <key=value> -w <⽬录路径> --name <容器名> <镜像名>:<标签>`
    - `-d` 后台运行
    - `-p` 指定宿主机端口和容器端口的映射
    - `-e` 指定环境变量
    - `-w` 指定⼯作⽬录
    - `--name` 指定容器名称

#### 案例

- 使用镜像`nginx:latest`启动一个容器, 并在容器中执行交互式`bash shell`
    - `docker run -it nginx:latest /bin/bash`

- 创建⼀个 mysql容器，后台模式启动，主机 3316端⼝映射到容器 3306端⼝，主机 /data⽬录映射到容器 /data⽬录
    - `docker run -it -p 3316:3306 -v /data/date -d mysql:latest`













### 容器管理

### 容器运行

### 容器操作

### 网络管理

### 数据卷管理

### 插件管理























## 构建镜像

### 非当前目录构建

- `docker build -t <镜像名>:<标签> <Dockerfile路径>` 构建镜像
    - `-t` 指定镜像名和标签
    - `<Dockerfile路径>` 指定Dockerfile的路径

### 当前目录构建

- `docker build -t <镜像名>:<标签> .` 构建镜像
    - `-t` 指定镜像名和标签
    - `.` 当前目录

### 查看镜像

- `docker images`or `docker images ls`查看镜像

## 运行容器

### 简单运行

- `docker run <镜像名>:<标签>` 运行容器

### 后台运行 && 端口映射 && 指定容器名 && 指定镜像名 运行

- `docker run -d -p <宿主机端口>:<容器端口> --name <容器名> <镜像名>:<标签>` 运行容器
    - `-d` 后台运行
    - `-p` 指定宿主机端口和容器端口的映射
    - `--name` 指定容器名
    - `<镜像名>:<标签>` 指定镜像名和标签


## Docker Compose & Kubernetes

### Docker Compose

- Docker Compose是一个用于定义和运行多容器Docker应用程序的工具
- 通过一个`docker-compose.yml`文件, 定义一组容器, 然后通过`docker-compose`命令, 启动, 停止, 删除这组容器
- 通过`docker-compose`命令, 可以一次性启动多个容器, 而不是一个一个启动
- 运行场景
    - 前端&后端&数据库&缓存&负载均衡等不同容器组成的应用程序
    - 开发环境&测试环境&生产环境等不同环境的应用程序

### Kubernetes

- Kubernetes是一个开源的容器编排引擎, 用于自动化部署, 扩展和管理容器化应用程序
- Kubernetes的特点
    - 自动化部署, 扩展和管理容器化应用程序
    - 自动化容器的调度和负载均衡
    - 自动化容器的健康检查和自愈
    - 自动化容器的扩展和收缩
    - 自动化容器的滚动升级和回滚
    - 自动化容器的配置管理
    - 自动化容器的存储管理
    - 自动化容器的网络管理
    - 自动化容器的安全管理
    - 等等
- 用法
    - 通过`kubectl`命令, 可以管理Kubernetes集群, 包括创建, 删除, 更新, 查询, 扩展, 收缩, 升级, 回滚, 配置, 存储, 网络, 安全等
