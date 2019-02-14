const CONFIG = require("../config");
const DB_SERVER = `mongodb://<${CONFIG.username}>:<${CONFIG.password}>@ds335275.mlab.com:35275/dating-app`;
var mongojs = require('mongojs')(DB_SERVER, ['Users']);
//mongojs.connect(DB_SERVER, ['Users']);

module.exports = { mongojs }