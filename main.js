var user_chose;
var clicked = false;
var can_click = true;

const user = document.querySelectorAll(".choose")
user.forEach(button=>{
    button.addEventListener('click',(e)=>{
        user_chose=e.target.innerHTML
        clicked=true
    })
})

const buttons = document.querySelectorAll('.butt')
buttons.forEach(button=>{
    button.addEventListener('click',(e)=> {
        if (e.target.innerHTML.length == 0 && clicked && can_click) { //prevent not chosing anything
            e.target.innerHTML = user_chose
            addToMatrix(user_chose,button.dataset)
        }
        else {
            alert('you cant do that :/')
        }
    
    })
})
var table = [['','',''],['','',''],['','','']]

//clear a table
const clear = document.querySelector("#clear")
clear.addEventListener('click',()=>{
    table = [['','',''],['','',''],['','','']]
    buttons.forEach(button => {
        button.innerHTML = ''
    })
    console.clear()
    result.innerHTML = ''
    can_click=true

})

function checkWinner(matrix){
    for(level in matrix){
        console.log(matrix[level])
        const allEqual = arr => arr.every( v => v === arr[0] )

        const initialValue = 0
        const sumWithInitial = matrix[level].reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
          );
        if(allEqual(matrix[level]) && sumWithInitial != 0){ //if user has won based on row
            const result = document.querySelector("#result")
            result.innerHTML = `${matrix[level][0]} has won`
            can_click=false //to prevent from clicking, u need to clear
            return `${matrix[level][0]} has won, row`
        }
        }
    }



function addToMatrix(user_input,dataset) {
    console.log(`${user_input} was placed at ${dataset.row} row, ${dataset.column} column`)
    table[dataset.row-1][dataset.column-1] = user_input
    // console.table(table)
    console.log(checkWinner(table))

}



