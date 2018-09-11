const db = require('../database/model.js');

module.exports = {
    fetch: (req, res) => {
      var title = req.query.title;
       db.PlayerList.findById(title)
       .then(song => {
           if(song){
               res.status(200).send(song);
           } else {
               res.status(404).send('Song not found')
           }
       })
       .catch(err => res.status(404).send(err))
    }
}