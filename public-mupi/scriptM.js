const NGROK = `${window.location.hostname}`;
//const NGROK = `https://${window.location.hostname}`;
//let socket = io(`${window.location.hostname}:5050`, { path: '/real-time' }); 
let socket = io(NGROK, { path: '/real-time' });
console.log('Server IP: ', NGROK);

socket.on('display-score', msn => {
    console.log(msn);
});

socket.on('display-datas', email => {
    console.log(email);
})
//Importar interfaz de Santi