let rec = document.querySelector('.rectangle');
let body = document.querySelector('body');
let width = document.documentElement.clientWidth + 0,
    height = document.documentElement.clientHeight + 0;
let timerId;

// Rectangle start position
    let x = 0,
    y = 0;
rec.style.left = `${x}px`;
rec.style.top = `${y}px`;

// Events Listeners
body.addEventListener('contextmenu', makeStepRight)
body.addEventListener('click', makeStepLeft)
body.addEventListener('wheel', makeStepVertical)
rec.addEventListener('mouseenter', changeColor)
rec.addEventListener('mouseleave', stopChangeColor)

// Functions for making steps
function makeStepRight(event) {
    event.preventDefault();
    x += 40;
    if (x > width - 50) x = width - 50;
    rec.style.left = `${x}px`;
}

function makeStepLeft() {
    x -= 40;
    if (x < 0) x = 0;
    rec.style.left = `${x}px`;
}

function makeStepVertical(event) {
    y += event.deltaY*0.2;
    if (y < 0) y = 0;
    if (y > height - 50) y = height - 50;
    rec.style.top = `${y}px`;
}

function changeColor() {

    let t = 200;

    timerId = setInterval(color, 1); 
    
    function color() {

        rec.style.backgroundColor = `hsl(${t}, 80%, 50%)`;
        t += 2;
        if (t == 359) t = 0;
    }
};

function stopChangeColor() {

    clearTimeout(timerId);
    rec.style.backgroundColor = '';
}

