const canvas = document.querySelector('#canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const circleRadio = canvas.height * 0.1;
console.log(circleRadio);

// Funcion por cada figura en la composicion

function fullCricle(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse(circleRadio + (circleRadio * 2 * x), (circleRadio) + circleRadio * 2 * y, circleRadio, circleRadio, 0, Math.PI, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((circleRadio) + circleRadio * 2 * x, (circleRadio + 1) + circleRadio * 2 * y, circleRadio, circleRadio, 0, Math.PI * 2, Math.PI);
    ctx.fill();
}

function rotFullCricle(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((circleRadio) + circleRadio * 2 * x, (circleRadio) + circleRadio * 2 * y, circleRadio, circleRadio, 0, Math.PI / 2, (3 * Math.PI) / 2);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((circleRadio + 1) + circleRadio * 2 * x, (circleRadio) + circleRadio * 2 * y, circleRadio, circleRadio, 0, (3 * Math.PI) / 2, Math.PI / 2);
    ctx.fill();
}

function halfCricle(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((circleRadio) + (circleRadio * 2 * x), circleRadio + circleRadio * ((2 * y) - 1), circleRadio, circleRadio, 0, Math.PI * 2, Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((circleRadio) + circleRadio * 2 * x, (circleRadio) + circleRadio * (2 * y + 1), circleRadio, circleRadio, 0, Math.PI, Math.PI * 2);
    ctx.fill();
}

function rotHalfCricle(x, y) {
    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((circleRadio) + (circleRadio * 2 * x) - circleRadio, circleRadio + circleRadio * ((2 * y)), circleRadio, circleRadio, 0, (3 * Math.PI) / 2, Math.PI / 2);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.ellipse((circleRadio) + circleRadio * 2 * x + circleRadio, (circleRadio) + circleRadio * (2 * y), circleRadio, circleRadio, 0, Math.PI / 2, (3 * Math.PI) / 2);
    ctx.fill();
}

// Definir color global
function cambioColor(eventData) {
    const g = 55+ Math.ceil((200/canvas.width)*eventData.clientX); // Mantener valores dentro del rango 0-255
    const b = 55+ Math.ceil((200/canvas.height)*eventData.clientY);
    const r = 0; // Mantener un tono fijo

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`; // Aplicar color actualizado
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    dibujar(false); // Redibujar con las mismas formas
}

// Crear un array con todas las funciones para despues usarlas al azar
const functions = [fullCricle, rotFullCricle, halfCricle, rotHalfCricle];
// Definir tamaño de la cuadricula
const gridSizeX = Math.floor(canvas.width / (circleRadio * 2));
const gridSizeY = Math.floor(canvas.height / (circleRadio * 2));
console.log(gridSizeX, gridSizeY);

// Almacenar las figuras en una cuadrícula para reutilizarlas
let shapeGrid = [];

function dibujar(randomize) {
    // si randomize es verdadero, se generan nuevas formas aleatorias
    if (randomize) {
        shapeGrid = []; // Reiniciar la cuadrícula cuando se haga clic
    }
    for (let y = 0; y <= gridSizeY; y++) {
        for (let x = 0; x <= gridSizeX; x++) {
            ctx.globalAlpha = 1 - (x * 0.1); // La opacidad disminuye de izquierda a derecha

            // si randomize es verdadero, dibujar una forma aleatoria
            if (randomize) {
                // Escoger una función aleatoria y almacenarla
                shapeGrid[y] = shapeGrid[y] || [];
                shapeGrid[y][x] = functions[Math.floor(Math.random() * functions.length)];
            }
            // si randomize es falso, usar la forma almacenada
            shapeGrid[y][x](x, y); // Usar la función almacenada
        }
    }
}

// Dibujar inicialmente con formas aleatorias
dibujar(true);

// Redibujar la cuadricula al hacer click de forma aleatoria
canvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujar(true); // Redibujar con nuevas formas aleatorias
});

// Actualizar colores al mover el mouse
window.addEventListener('mousemove', cambioColor);
