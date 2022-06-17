const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
var http = require('http').createServer(app);
var io = require('socket.io') (http,{cors: {origin: '*'}});


const users_router = require('./routes/userRouter.js');
const auth_router = require('./routes/authRouter.js');
const socket_router = require('./routes/socketRouter.js');

//Api port
const ApiPORT = 3001;
app.listen(ApiPORT, console.log("Server don start for port: " + ApiPORT))

//socket port
const HttpPORT  = 8080;
http.listen(HttpPORT, () => { console.log(`listening on *:${HttpPORT}`);});

app.use(express.json());
app.use('/api/auth', auth_router);
app.use('/api/user', users_router);

io.on('connection', socket_router);