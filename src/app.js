require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.io = require('socket.io')();
app.set('socketio', app.io);


app.disable('x-powered-by');



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// db(process.env.MONGO_URL, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// }, console.log('MongoDB online'));




// require('./utils/sockets')(app.io);
setInterval(async () => {
    require('./utils/listMaps').getCoords();

}, 60 * 1000);

app.use('/', require('./routes'));

module.exports = app;