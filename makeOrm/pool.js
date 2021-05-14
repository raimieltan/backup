const pg = require('pg')


const pool = new pg.Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'farm_db',
    host: 'localhost'
})


pool.connect((err) => {
    if (err) {
        console.log(err)
    }

    else {
        console.log("Connected")
    }
})


module.exports = pool;