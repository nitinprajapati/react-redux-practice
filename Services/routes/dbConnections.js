const DB_SERVER = "mongodb://localhost:27017/dating-app";
var mongojs = require('mongojs')(DB_SERVER, ['Users']);
//mongojs.connect(DB_SERVER, ['Users']);

module.exports = { mongojs }