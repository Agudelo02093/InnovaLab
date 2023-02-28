import express from "express";
import { Server } from "socket.io";
const expressApp = express();
const PORT = 5050;

expressApp.use(express.json());
expressApp.use('/app', express.static('public'));
expressApp.use('/player', express.static('public-player'));
expressApp.use('/mupi', express.static('public-mupi'));

//---------------------------- Dinamic files
expressApp.get('/player', (request, response) => {
    response.render('player', { DNS: `http://localhost:${PORT}` });
});

expressApp.get('/mupi', (request, response) => {
    response.render('mupi', { DNS: `http://localhost:${PORT}` });   
});

const httpServer = expressApp.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}/app`);
});

//---------------------------- Socket connections
const io = new Server(httpServer, {path: '/real-time' });

io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('score', (message) => {
        console.log(message);
        socket.broadcast.emit('display-score', message);
    });
    socket.on('datas', (email) => {
        console.log(email);
        socket.broadcast.emit('display-datas', email);
    });
});