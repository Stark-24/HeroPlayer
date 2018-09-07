const Sequelize = require("sequelize");
const sequelize = require("./index.js");

const PlayerList = sequelize.define("list", {
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

sequelize.sync({force: false});

module.exports = {
    PlayerList
}