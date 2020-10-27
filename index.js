const grid = document.querySelector('.grid');
const gridNumber = document.getElementById('numberOf');
const generateButton = document.getElementById("button");

let squares=[]

const demo = document.getElementById("demo");

//if you click the button, a grid will be generated

function generateGrid() {

    for (i=0; i<gridNumber.value; i++){
    //creating the square
    const square = document.createElement('div');
    //giving the square an appearance
    square.classList.add('square')
    //put the element into our grid
    grid.appendChild(square)
    //push it into a new squares array    
    squares.push(square)
}

}


function test() {
    demo.innerHTML=gridNumber.value;
}

generateButton.addEventListener('click', generateGrid)

//next make a new input to make the rectagular grid composition