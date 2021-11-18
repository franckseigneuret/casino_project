var express = require('express');
var router = express.Router();
const gridModel = require('../models/grid')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', mode: process.env.NODE_ENV });
});

router.post('/grid', async function (req, res, next) {

  let message

  // connaitre le num° de la dernière partie
  const lastSessionGameId = await gridModel.find().sort({ session_game_id: -1 }).limit(1);

  // l'incrémenter
  const i = lastSessionGameId && lastSessionGameId[0] && lastSessionGameId[0].session_game_id ? lastSessionGameId[0].session_game_id + 1 : 1

  console.log('last = ', i);

  // pour enregistrer la nouvelle partie
  const grid = new gridModel({
    session_game_id: i,
  });
  const sessionGame = await grid.save()

  if (sessionGame.session_game_id === i) {
    message = ' La partie ' + sessionGame.session_game_id + ' a été enregistrée'
  } else {
    message = 'erreur d\'enregistrement nouvelle partie'
  }

  res.json({ message });
});

module.exports = router;
