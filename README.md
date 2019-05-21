# vue-cli-template
> 使用 vue-cli3 搭建的vue-vuex-router-cubeui 开发模版，集成常用组件，功能模块
> UI 框架使用 cube-ui

## 一、官方 Vue-CLI3 初始化项目

## 二、实现的功能模块

### 1. 自动注册全局组件

### 2. 自动扫描路由

### 3. 通过 node 生成(页面)组件模板

### 4. axios 封装

- 不同环境对应不同的 BASE_URL
- 设置 POST 请求头
- 请求响应拦截
- 合并请求 loading 显示
- api 统一管理、挂载 Vue 实例
- 文件上传

### 5. 使用 cube-ui 组件库

- 使用 vw 布局
- 组件按需引入
- 主题定制
- 后编译
  
### 6. mixin 使用

### 7. vuex 使用

### 8. eslint&&prettier

- 代码检查&&格式化
- GitHooks 代码提交前自检

### 9. 添加工具函数和自定过滤器

- 常用工具函数
- 常用过滤函数(时间格式化/小数点处理)
- 添加样式和样式 mixin

### 10. svg 使用

## 三、命名规范

### 1. Component

所有的`Component`文件都是以大写字母开头(PascalCase),官方推荐。

但除了`index.vue`

例子：

- `@/src/components/BackTop/index.vue`
- `@/src/components/Charts/Line.vue`
- `@/src/views/example/components/Buttoms.vue`
  
### 2. JS 文件

所有的`.js`文件都遵循横线连接(kebab-case)。

例子：

- `@/src/utils/open-window.js`
- `@/src/views/svg-icons/require-icons.js`
- `@/src/components/MarkdownEditor/default-options.js`

### 3. Views

在`views`文件下，代表路由的`.vue`文件都是用横线连接(kebab-case)，代表路由的文件夹也是用同样的规则。

例子：

- `@src/views/svg-icons/index.vue`
- `@src/views/svg-icons/require-icon.vue`

使用原因：

- 横线连接(kebab-case)也是官方推荐的命名规范之一
- `views`下的`.vue`文件代表的是一个路由，所以它需要和`component`进行区分(component 都是大写开头)
- 页面的`url`也都是横线连接的，比如`https://www.xxx.admin/export-excel`，所以路由对应的`view`应该要保持统一
- 没有大小写问题
