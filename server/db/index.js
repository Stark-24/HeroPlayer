const Sequelize = require('sequelize');
const postgres = require('pg');
const connection = new Sequelize('starkcloud_player', 'starkcloud', '', {
    host: 'localhost',
    dialect: 'postgres'
})

connection.authenticate()
.then(() => console.log('Successfully connected to the database!'))
.catch(err => console.log('Error connecting to the database', err))

//sequelize.connect();

module.exports = connection;