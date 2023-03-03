import { express, Server, cors, os } from './dependencies.js'
const PORT = 5050;
const IPaddress = '192.168.128.3';
const SERVER_IP = IPaddress;

const expressApp = express();
expressApp.use(cors({ origin: "*" }));
expressApp.use(express.json());
expressApp.use('/player', express.static('public-player'));
expressApp.use('/mupi', express.static('public-mupi'));

const httpServer = expressApp.listen(PORT, () => {
    console.log(`Server running, host http://${SERVER_IP}:${PORT}`);
    console.table({
        'Client Endpoint' : `http://${SERVER_IP}:${PORT}/player`,
        'Mupi Endpoint' : `http://${SERVER_IP}:${PORT}/mupi`});
});

//---------------------------- Dinamic files
// expressApp.get('/player', (request, response) => {
//     response.render('player', { DNS: `http://localhost:${PORT}` });
// });

// expressApp.get('/mupi', (request, response) => {
//     response.render('mupi', { DNS: `http://localhost:${PORT}` });   
// });

// const httpServer = expressApp.listen(PORT, ()=> {
//     console.log(`http://localhost:${PORT}/app`);
// });

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