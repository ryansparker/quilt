const grid = document.querySelector('.grid')
const generateButton = document.getElementById("myButton")
const demo = document.getElementById("demo");

let squares=[]


//if you click the button, a grid will be generated
function generateGrid() {

    //getting the value of the width and multiplying
    let num1 = document.getElementById('numberWidth').value
    let num2 = document.getElementById('numberLength').value
    let result = num1 * num2

    //getting overall grid to match width and height
    grid.style.width=`${num1 * 50}px`
    grid.style.height=`${num2 * 50}px`

    
    for (let i=0; i<result; i++){
    //creating the square
    const square = document.createElement('div');
    square.classList.add('square')

    //adding random color
    let randomNumber=(Math.floor(Math.random() * 5) + 1)
    console.log(randomNumber)
    
    if (randomNumber ===1 ){
        square.style.backgroundColor="pink"
    } else if (randomNumber ===2 ){
        square.style.backgroundColor="yellow"
    } else if (randomNumber ===3 ){
        square.style.backgroundColor="blue"
    } else if (randomNumber ===4 ){
        square.style.backgroundColor="red"
    } else if (randomNumber ===5) {
        square.style.backgroundColor="green"
    }
    
    //put the element into our grid
    grid.appendChild(square)
    //push it into a new squares array    
    squares.push(square)


    
}

    demo.innerHTML = result
    
}



generateButton.addEventListener('click', generateGrid)



  // var timesClicked = 0;

    // generateButton.click(function() {
    // timesClicked++;

    // if (timesClicked>1) {
    //     resetIt()
    // } else {
    //     generateIt()
    // }

    // })

    // function resetIt(){
    //     squares=0
    // }