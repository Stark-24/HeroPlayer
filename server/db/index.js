const Sequelize = require('sequelize');
const postgres = require('pg');
const sequelize = new Sequelize('starkcloud_player', 'starkcloud', '', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
.then(() => console.log('Successfully connected to the database!'))
.catch(err => console.log('Error connecting to the database', err))

//sequelize.connect();

module.exports = sequelize;