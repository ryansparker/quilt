const grid = document.querySelector('.grid')
const generateButton = document.getElementById("myButton")
const demo = document.getElementById("demo");

//constructor
const newQuilt = (width, length) => {
    const blocks = []

    const quilt = {
        addBlock: bl => blocks.push(bl),
        clear: () => blocks.length = 0,
        getWidth: () => width,
        getLength: () => length,
        forEachBlock: cb => blocks.forEach(cb),
        debug: () => console.log(blocks)
    }

    return quilt
}

//if you click the button, a grid will be generated
function generateQuilt(w, l) {
    const quilt = newQuilt(w, l)

    let result = w * l
    
    for (let i=0; i<result; i++){

        //adding random color
        let randomNumber=(Math.floor(Math.random() * 5) + 1)
        console.log(randomNumber)
        
        let backgroundColor = null

        if (randomNumber ===1 ){
            backgroundColor="pink"
        } else if (randomNumber ===2 ){
            backgroundColor="yellow"
        } else if (randomNumber ===3 ){
            backgroundColor="blue"
        } else if (randomNumber ===4 ){
            backgroundColor="red"
        } else if (randomNumber ===5) {
            backgroundColor="green"
        }

        //creating the square
        const block = {
            backgroundColor
        }
        
        //push it into a new squares array    
        quilt.addBlock(block)
    }

    return quilt
}

const quilts = []

function drawQuilt(quilt) {
    grid.innerHTML = ''

    quilt.forEachBlock( block => {
        const div = document.createElement('div')
        div.className = 'block'
        div.style.backgroundColor = block.backgroundColor

        grid.appendChild(div)
    })

    quilt.debug()
}

generateButton.addEventListener('click', ev => {
    ev.preventDefault()

    //getting the value of the width and multiplying
    let w = document.getElementById('numberWidth').value
    let l = document.getElementById('numberLength').value

    //getting overall grid to match width and height
    grid.style.width=`${w * 50}px`
    grid.style.height=`${l * 50}px`

    const quilt = generateQuilt(w, l)
    quilts.push(quilt)

    drawQuilt(quilt)

    console.log(quilts)
})
