// const NGROK = `https://${window.location.hostname}`;
const NGROK = `${window.location.hostname}:5050`;
console.log('Server IP: ', NGROK);
let socket = io(NGROK, { path: '/real-time' });

function loader(){
    document.getElementById('loader').style.display ='none';
    document.getElementById('game_con').style.display = 'flex';
    start();
}

setTimeout(loader, 1000);

function start(){
    var number, weirdCicle, aleatorColor, r,g,b, weirdColor;
    
    function reload(){
       score = -2;
       time = 100;
       document.getElementById('game_con').style.display = 'flex';
       document.getElementById('cnMenu').style.display = 'none';
       update();
    };

    function form() {
        document.getElementById('ocult').style.display = 'none';
        document.getElementById('container').style.display = 'flex';
    }

    var score = -10;
    var time = 2000;

    function incorrect(){
        score -= 5
        console.log(score);
    }

    function save(){
        let email = "Thanks for participating";
        socket.emit('datas', email)
        document.getElementById('container').style.display = 'none';
        document.getElementById('done').style.display = 'flex';
    };

    var circle1 = document.getElementById('circle1')
    var circle2 = document.getElementById('circle2')
    var circle3 = document.getElementById('circle3')
    var circle4 = document.getElementById('circle4')
    var circle5 = document.getElementById('circle5')
    var circle6 = document.getElementById('circle6')
    var circle7 = document.getElementById('circle7')
    var circle8 = document.getElementById('circle8')
    var circle9 = document.getElementById('circle9')

    //addEventListener
    document.getElementById('circle1').addEventListener('click', color1);
    document.getElementById('circle2').addEventListener('click', color2);
    document.getElementById('circle3').addEventListener('click', color3);
    document.getElementById('circle4').addEventListener('click', color4);
    document.getElementById('circle5').addEventListener('click', color5);
    document.getElementById('circle6').addEventListener('click', color6);
    document.getElementById('circle7').addEventListener('click', color7);
    document.getElementById('circle8').addEventListener('click', color8);
    document.getElementById('circle9').addEventListener('click', color9);
    document.getElementById('btn').addEventListener('click', form)
    document.getElementById('btn_form').addEventListener('click', save)

    var ar = [circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8, circle9];

    function menu() {
        document.getElementById('cnMenu').style.display = "flex";
        document.getElementById('game_con').style.display = "none";
    }

    function update() {
        number = Math.floor(Math.random() * 9);
        r = Math.floor(Math.random() * 235);
        g = Math.floor(Math.random() * 235);
        b = Math.floor(Math.random() * 235);
        aleatorColor = "rgb" + "(" + r + ", " + g + ", " + b + ")";
        weirdColor = "rgb" + "(" + (r + 15) + "," + (g + 15) + "," + (b + 15) + ")";
        weirdCicle = ar[number];
        score += 2;

        if (score > 50) {
            menu();
        }

        if (score <= 0) {
            document.getElementById('lose').innerHTML = "You didn't win...";
            document.getElementById('button').style.display = "none";         
        }else {document.getElementById('lose').innerHTML = " ";}

        if (score > 0) {
            document.getElementById('game_over').innerHTML = "You won a discount!";
            document.getElementById('score').innerHTML = score + "%";
            document.getElementById('button').style.display = "flex";
            
        }else{
            document.getElementById('game_over').innerHTML = " ";
            document.getElementById('score').innerHTML = " ";
        }
        
        document.getElementById('scoreAll').innerHTML = "Score: " + score;

        let message = score;
        socket.emit('score', message);

        weirdCicle.style.backgroundColor = weirdColor;

        for(i = 0; i <= 8; i++){
            if (i == number) {
                
            }else{
                ar[i].style.backgroundColor = aleatorColor;
            }
        }
    }

    function color1(){
        if (number != 0) {
            incorrect();
        }
        update();
    }

    function color2(){
        if (number != 1) {
            incorrect();
        }
        update();
    }

    function color3(){
        if (number != 2) {
            incorrect();
        }
        update();
    }

    function color4(){
        if (number != 3) {
            incorrect();
        }
        update();
    }

    function color5(){
        if (number != 4) {
            incorrect();
        }
        update();
    }

    function color6(){
        if (number != 5) {
            incorrect();
        }
        update();
    }

    function color7(){
        if (number != 6) {
            incorrect();
        }
        update();
    }

    function color8(){
        if (number != 7) {
            incorrect();
        }
        update();
    }

    function color9(){
        if (number != 8) {
            incorrect();
        }
        update();
    }

    reload();

    function timer() {
        time -= 0.1;
        document.getElementById('time').style.width = time + "vw";

        if (time <= 0) {
            menu();
        }
    }

    setInterval(timer, 30);

};
