const mysql = require('mysql')

//连接数据库
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '12345678',
    database: "article"  //数据库名称
})

//创建一个 Article 类
class Article {

    /**
     * static 关键字  表示类的静态方法 ，
     * static 声明的方法不会被实例对象继承，可以通过类直接调用 ，例：Article.all()
     * */

     //查询全部
    static all(cb) {
        db.query('SELECT * FROM essay', cb)
    }

    //通过id查找
    static find(id, cb) {
        db.query('SELECT * FROM essay WHERE id = ?',id, cb)
    }

    //新增
    static create(data, cb) {
        const sql = 'INSERT INTO essay(Id,title,content) VALUES(0,?,?)'
        let addSqlParams = [data.title,data.content];
        db.query(sql,addSqlParams,cb) 
    }

    //删除
    static delete(id, cb) {
        if (!id) return 
        db.query('DELETE FROM essay WHERE id = ?', id, cb)
    }
}



module.exports = db
module.exports.Article = Article

/**
 * @description 
 * 这里的db是个实例对象
 * 所以使用 module.exports.Article = Article 没有问题
 * Article 就相当于 db 对象里面的属性
*/