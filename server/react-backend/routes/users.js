
// Asi se corre el servidor de express
// PORT=3001 node bin/www
var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jolans',
  password: '1234',
  database: 'eaqua'
});
//var MongoClient = require('mongodb').MongoClient;

// var url = "mongodb://localhost:27017/test";

/* GET users listing. */
router.get('/', function(req, res, next) {
/*
MongoClient.connect(url,
  function(err, db) {
  if (err) throw err;
  console.log("Database connecteded!");
  var dbo = db.db("test");
  var results = dbo.collection("students").find({});

  results.forEach(row => {
      console.log(row);
  });
});
*/
connection.connect((err) => {
  if (err) throw err;
  console.log('Conected');
});
res.json([{
  id: 1,
  name: "samsepi0l"
}, {
  id: 2,
  name: "D0loresH4ze"
}]);

});


module.exports = router;