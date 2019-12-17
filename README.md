### 文档说明
- 设置.gitignore文件，忽略 node_modules 推送到git
- 使用 npm install 安装项目依赖
- 使用 npm run dev 运行项目

### 使用模块
- `express` 
-  `mysql`
-  `body-parser`
-  `node-readability`
-  `ejs`
-  `bootstrap`
-  `supervisor`
  
##### 生成目录操作
  ``` bash
  npm install mddir
  cd node_modules/mddir/src  //进入目录
  ls                         //查看有没有 mddir.js 文件
  node mddir "../../../"     //生成目录

  ```

```
  |-- demo-test',
      |-- .gitignore',
      |-- README.md',
      |-- index.js',
      |-- package-lock.json',
      |-- package.json',
      |-- middlewear',
      |-- model',
      |   |-- index.js',
      |-- public',
      |-- routes',
      |-- views',
          |-- articles.ejs',
          |-- content.ejs',
          |-- foot.ejs',
          |-- head.ejs',
  
  ```
