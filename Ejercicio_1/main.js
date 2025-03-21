const canvas = document.querySelector('#canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const circleRadio = canvas.height*.1;


console.log(circleRadio);



//Funcion por cada figura en la composicion
function drawCanvas(posx,posy){

function fullCricle(y,x){

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(posx+circleRadio*2*x,posy+circleRadio*2*y,circleRadio,circleRadio,0,Math.PI, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(posx+circleRadio*2*x,posy+circleRadio*2*y,circleRadio,circleRadio,0,Math.PI*2, Math.PI);
    ctx.fill();


}

function rotFullCricle(y,x){


    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(posx+circleRadio*2*x,posy+circleRadio*2*y,circleRadio,circleRadio,0,Math.PI/2, (3 * Math.PI)/2 );
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(posx+circleRadio*2*x,posy+circleRadio*2*y,circleRadio,circleRadio,0,(3 * Math.PI)/2, Math.PI/2);
    ctx.fill();


}

function halfCricle(y,x){


    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((posx+circleRadio*2*x),posy+circleRadio*((2*y)-1),circleRadio,circleRadio,0,Math.PI*2, Math.PI);
    ctx.fill();

    
    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(posx+circleRadio*2*x,posy+circleRadio * (2 * y + 1),circleRadio,circleRadio,0,Math.PI, Math.PI * 2);
    ctx.fill();



}

function rotHalfCricle(y,x){


    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(posx+(circleRadio*2*x)-circleRadio,posy+circleRadio*((2*y)),circleRadio,circleRadio,0,(3 * Math.PI)/2, Math.PI/2);
    ctx.fill();

    
    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(posx+circleRadio*2*x+circleRadio, posy+circleRadio * (2 * y),circleRadio,circleRadio,0,Math.PI/2, (3 * Math.PI)/2);
    ctx.fill();



}

ctx.clearRect(0,0, canvas.width, canvas.height);
// definar color  glbal
ctx.fillStyle = "#124528";


ctx.globalAlpha = 1;
    fullCricle(0,0);
    halfCricle(1,0);
    rotFullCricle(2,0);
    fullCricle(3,0);
    
    ctx.globalAlpha = 0.80;

    halfCricle(0,1);
    fullCricle(1,1);
    rotHalfCricle(2,1);
    halfCricle(3,1);

    ctx.globalAlpha = 0.6;

    fullCricle(0,2);
    rotHalfCricle(1,2);
    fullCricle(2,2);
    rotFullCricle(3,2);

    ctx.globalAlpha = 0.4;


    rotHalfCricle(0,3);
    rotFullCricle(1,3);
    halfCricle(2,3);
    rotHalfCricle(3,3);
}
    

function envolturaDelEvento(eventData) {
    drawCanvas(eventData.clientX, eventData.clientY)
}


window.addEventListener('mousemove', envolturaDelEvento);


 