const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(8083,()=>{
    console.log('the server is run at 127.0.0.1:8083')
})