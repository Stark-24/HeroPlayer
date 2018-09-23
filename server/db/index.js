const Sequelize = require('sequelize');
const postgres = require('pg');
const amazonrds = require('/Users/julieim/Desktop/amazonrds.json')
const connection = new Sequelize('starkcloud_player', 'postgres', 'postgres123', {
    host: amazonrds.rdsurl,
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: 'Amazon RDS'
    }
})

connection.authenticate()
.then(() => console.log('Successfully connected to the database!'))
.catch(err => console.log('Error connecting to the database', err))

//sequelize.connect();

module.exports = connection;

