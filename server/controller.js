const db = require('./db/model.js');

module.exports = {
    fetch: (req, res) => {
       var id = randomNum();
       db.PlayerList.findById(id)
       .then(song => {
           if(song){
               console.log('newSong')
               res.status(200).send(song);
           } else {
               res.status(404).send('Song not found')
           }
       })
       .catch(err => res.status(404).send(err))
    }
}

const randomNum = () => {
   return Math.floor(Math.random() * 39) + 1
}