let socket = io("http://localhost:5050", {path: '/real-time'});

socket.on('display-score', msn => {
    console.log(msn);
});

socket.on('display-datas', email => {
    console.log(email);
})
//Importar interfaz de Santi