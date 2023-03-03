const NGROK = `${window.location.hostname}`;
//const NGROK = `https://${window.location.hostname}`;
//let socket = io(`${window.location.hostname}:5050`, { path: '/real-time' }); 
let socket = io(NGROK, { path: '/real-time' });
console.log('Server IP: ', NGROK);

socket.on('display-score', msn => {
    console.log(msn);
    document.documentElement.innerHTML = `
    <link rel="stylesheet" href="./style.css">
    <div class="scoreContainer">
        <img src="./imgMupi/red-logo.svg" alt="logo" class="logo">
        <h4>Keep going!</h4>
        <h1>Score</h1>
        <h3>${msn}</h3>
        <progress id="barra" class="progress-bar bg-danger" value="${msn}" max="20"></progress>
    </div>
    `
});

socket.on('display-datas', email => {
    console.log(email);
})
//Importar interfaz de Santi