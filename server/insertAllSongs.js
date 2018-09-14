var songs = require("../MOCK_DATA.json");
var db = require("./db/model.js");

var insertAllSongs = function(req, res) {
  console.log("insertAllSongs is invoked");
  songs.forEach(song => {
    //console.log(db);
    db.PlayerList.create({
      id: song.id,
      title: song.title,
      artist: song.artist,
      media: song.media,
      album_art: song.album_art,
      upload_date: song.upload_date,
      tags: song.tags,
      plays: song.plays
    })
      .then(song => {
        console.log("song saved");
      })
  });
};

insertAllSongs();

module.exports = insertAllSongs;
