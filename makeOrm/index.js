const bodyParser = require('body-parser');
const express = require("express")
const app = express()
const pool = require("./pool")





const displayChickens = async () => {
    try {
        const chickens = await pool.query('SELECT * from chickens')
        return chickens

    } catch (error) {
        return error
    }
}

const insertChicken = async ( breed, sex) => {
    try {
        const newChicken = await pool.query(`INSERT INTO chickens VALUES(default, $1, $2) RETURNING * `, [breed, sex])
        return newChicken
    } catch (error) {
        return error
    }
}

class Farm {
   

    create = async (promise, param1, param2) => {
        let result = await promise(param1, param2);
        console.log("The " + result.rows[0].sex + " " + result.rows[0].breed + " is added to the database")
    }

    all = async (promise) => {
        let result = await promise();
        console.log(result.rows)
    }

}

const farm = new Farm()
// farm.create(insertChicken, 'Darag' , 'female')
farm.all(displayChickens)


