// dependencies

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);


app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// set up server

io.on('connection', () => {
  console.log('a user is connected')
})

var server = http.listen(3001, () => {
  console.log('server is running on port', server.address().port);
});
