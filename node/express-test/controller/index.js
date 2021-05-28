const indexfn = function (req, res) {
  console.log(req.query);
  res.send('22')
}

module.exports = {
  indexfn
}