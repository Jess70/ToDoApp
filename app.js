var express = require('express');
var todoController = require('./controllers/todoControllers');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

// localhost:300/assets/styles.css;
todoController(app);

app.listen(3000);

console.log("you are listening to the port 3000");
