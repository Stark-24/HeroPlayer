const Sequelize = require("sequelize");
const connection = new Sequelize("starkcloud", "postgres", "",
  {
    host: "db",
    dialect: "postgres",
    port: 5432
  }
);

connection
  .authenticate()
  .then(() => console.log("Successfully connected to the database!"))
  .catch(err => console.log("Error connecting to the database", err));

//sequelize.connect();

module.exports = connection;
