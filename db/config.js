require('dotenv')
const mysql = require('mysql')


const connection = () => {
    try {
        const con = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.ROOT,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            port: process.env.PORT_DB
        });
        
        con.connect(err => {
            if(err) throw err
        
            console.log('Database online')
        })

        return con

    } catch (error) {
        throw error
    }
}


module.exports = connection