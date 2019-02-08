
//Resurs meny

let menu = require('../data/menu.json')

exports.get = (req, res, next) => {

  res.status(200).send(menu);


}
