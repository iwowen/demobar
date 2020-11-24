# demobar

使用 webpack 构建方便编写 demo 的多页面框架，适合开发者编写 demo 页面，提供分类预览的功能。

demo 地址: [https://iwowen.github.io/demobar/](https://iwowen.github.io/demobar/)

## 使用方法

```

1. 每一个demo必须有一个分类，只需要在src中创建分类目录
2. 在分类目录中添加单个demo的目录，里面必须包含`index.js`、`index.html`

```

注：自 v1.1 版本后不再需要 config 目录。

## 打包部署

- 打包的时候需要配置根目录下`.env.production`文件的`PUBLICPATH`为静态文件根路径。比如当前`demobar`项目放在`https://iwowen.github.io/demobar/`域名路径下，那么`PUBLICPATH`可以设置为`/demobar/`或者`https://iwowen.github.io/demobar/`

- 打包后提交`dist`到`gh-pages`分支

```bash
git subtree push --prefix=dist origin gh-pages
```

- 使用 git page 部署`gh-pages`分支

## webpack 封装内容

- babel-loader 将 JS 转义为低版本
- html-webpack-plugin 在浏览器中查看页面，打包 html
- webpack-dev-server 开发实时查看效果
- devtool 可以帮助我们将编译后的代码映射回原始源代码
- css 相关 loader style-loader css-loader postcss-loader autoprefixer less-loader
- clean-webpack-plugin 每次打包前清空 dist 目录
- copy-webpack-plugin copy 静态文件目录
- underscore-template-loader 处理 ejs 文件中的引入
- webpack-bundle-analyzer 可以看到项目各模块的大小，可以按需优化
- open-browser-webpack-plugin 自动打开浏览器
- mini-css-extract-plugin 分离 css
