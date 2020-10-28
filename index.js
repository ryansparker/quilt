const grid = document.querySelector('.grid')

const generateButton = document.getElementById("myButton")

let squares=[]

const demo = document.getElementById("demo");


//if you click the button, a grid will be generated

function generateGrid() {
 
    //getting the value of the width and multiplying
    let num1 = document.getElementById('numberWidth').value
    let num2 = document.getElementById('numberLength').value
    let result = num1 * num2


    grid.style.width=`${num1 * 50}px`
    grid.style.height=`${num2 * 50}px`

    for (let i=0; i<result; i++){
    //creating the square
    const square = document.createElement('div');
    //giving the square an appearance
    square.classList.add('square')
    //put the element into our grid
    grid.appendChild(square)
    //push it into a new squares array    
    squares.push(square)
}

demo.innerHTML = result
}


generateButton.addEventListener('click', generateGrid)

