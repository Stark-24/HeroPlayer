const Sequelize = require("sequelize");
const connection = require("./index.js");

const PlayerList = connection.define(
  "cloudsongs",
  {
    id: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING(2000),
      allowNull: false,
      unique: true
    },
    artist: {
      type: Sequelize.STRING(2000),
      allowNull: false,
      unique: true
    },
    media: {
      type: Sequelize.STRING(2000),
      allowNull: false,
      unique: true
    },
    album_art: {
      type: Sequelize.STRING(2000),
      allowNull: false,
      unique: true
    },
    upload_date: {
      type: Sequelize.STRING(2000),
      allowNull: false,
      unique: true
    },
    tags: {
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    plays: {
      type: Sequelize.SMALLINT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true
    }
  },
  { timestamps: false }
);

connection.sync({ force: false });

module.exports = { PlayerList };
