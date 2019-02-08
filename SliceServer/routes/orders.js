exports.get = (req, res, next) => {

}
exports.post = (req, res, next) => {
  console.log(req.headers);
  res.status(200).send(req.headers)

}


exports.patch = (req, res, next) => {

}
