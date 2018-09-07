const Sequelize = require("sequelize");
const connection = require("./index.js");

const PlayerList = connection.define("list", {
  id: {
    type: Sequelize.smallserial,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  media: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  album_art: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  upload_date: {
    type: Sequelize.TIME,
    allowNull: false
  },
  plays: {
    type: Sequelize.SMALLINT,
    allowNull: false
  }
});

connection.sync({force: false});

module.exports = {
    PlayerList
}