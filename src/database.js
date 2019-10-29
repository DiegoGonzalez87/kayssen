const mysql = require('mysql');
const { promisify } = require('util');

const { db } = require('./keys');

const pool = mysql.createPool(db);

pool.getConnection((err, connection)=>{
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('database conection was closed');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('database  has to  many connections');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('database connection was refused');
        }
    }

    if (connection) connection.release();
    console.log('DB is Connection');

    return;
})

pool.query = promisify(pool.query);
module.exports = pool;