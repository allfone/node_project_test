const express = require('express')
const app = express()
//post 请求需要一个消息体解析器，引入 body-parser 中间件
const bodyParser = require('body-parser')
const Article = require('./model/index').Article

const articles = [{ title: "example" }]
//读取文章模块
const read = require('node-readability')
const url = 'https://www.manning.com/cantelon2/'

//读取文章，将文章保存进数据库
// read(url, (err, result) => {
//     Article.create(
//         {
//             title: result.title,
//             content: result.content
//         }, function(err, article){
//             if(err) return
//             console.log(article)
//         }
//     )
// })

// 当请求headers 中的Content-Type :application/json 时 ，会用下面语句来解析请求体
app.use(bodyParser.json());

// 当请求headers 中的Content-Type :application/octet-stream 时 ，会用下面语句来解析请求体
app.use(bodyParser.raw())

// 当请求headers 中的Content-Type :text/plain 时 ，会用下面语句来解析请求体
app.use(bodyParser.text())

// 当请求headers 中的Content-Type :application/x-www-form-urlencoded 时 ，会用下面语句来解析请求体
app.use(bodyParser.urlencoded({ extended: false}))

//使用css
app.use(
    '/css/bootstrap.css',
    express.static('node_modules/bootstrap/dist/css/bootstrap.css')
)


//获取所有文章
app.get('/articles', (req, res, next) => {
    Article.all((err, articles) => {
        if (err) return next(err);
        //渲染模版
        res.format({
            html: ()=>{
                res.render('articles.ejs',{articles:articles})
            },
            json: ()=>{
                res.send(articles)
            }
        })
    })

})

//新增文章
app.post('/articles', (req, res, next) => {
    Article.create(
        {
            title:req.body.title ,
            content: req.body.content
        }, function(err, article){
            if(err) return
            res.send({
                code:200,
                result:"success"
            })
        }
    )

})

//获取指定id的文章
app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id
    Article.find(id, (err, articles) => {
        if (err) return next(err);
        //渲染模版
        res.format({
            html: ()=>{
                res.render('content.ejs',{articles:articles})
            },
            json: ()=>{
                res.send(articles)
            }
        })
    })
})

//删除文章
app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id
    Article.delete(id, (err) => {
        if (err) return next(err);
        res.send({ message: "删除" })
    })
})

app.listen(8083, () => {
    console.log('the server is run at 127.0.0.1:8083')
})

module.exports = app