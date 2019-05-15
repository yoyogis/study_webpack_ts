#### 初始化project 

`npm init`

#### 安装ts依赖

`npm install typescript -g`

`npm install ts-loader webpack webpack-cli webpack-dev-server —save-dev`

`npm install typescript`

#### 初始化tsconfig.json

`tsc --init`

#### 编写webpack配置文件 webpack.config.dev.json

```json

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}; 
```

#### 编写package.json文件, 定义开发环境运行命令

`"start": "webpack-dev-server --config webpack.config.dev.js --hot --inline"`

#### 编写页面和代码

##### 在项目根目录创建页面 ***index.html***

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack&TS</title>
    <script src="bundle.js"></script>
</head>
<body>
    Hello world !
</body>
</html>
```

##### 在src创建入口ts文件 ***index.ts***

```typescript
export class Test{
    
}
```

#### 启动

`npm start`

#### 验证

http://localhost:8080/

#### 打包build

在package.json中添加如下脚本

`"build": "rm -rf ./dist/* && webpack --config webpack.config.dev.js&&cp index.html ./dist/"`