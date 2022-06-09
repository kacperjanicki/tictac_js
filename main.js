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
    //ROW
    for(level in matrix){
        // console.log(matrix[level])
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
    var container=[]
    var container2=[]
    var new_matrix=[]
    //CROSS
    for(level in matrix){
        console.log(matrix[level])
        container.push(matrix[level][level])      
    }
    for(let i=matrix.length;i>=0;i--){
        new_matrix.push(matrix[i-1])
    }
    new_matrix.splice(-1,1)
    for(level in new_matrix){
        // console.log(new_matrix[level])
        container2.push(String(new_matrix[level][level]))      
    }
    console.log(`left cross: ${container.join("")}`)
    console.log(`right cross:[${container2}]`)
    if(container.join("")=="OOO" || container.join("")=="XXX"){
        result.innerHTML = `${container[0]} has won`
        can_click=false
        return `${container[0]} wins, cross`

    }else if(container2.join("")=="OOO"||container2.join("")=="XXX"){
        result.innerHTML = `${container2[0]} has won`
        can_click=false
        return `${container2[0]} wins, cross`
    }
   
    

    
}

checkWinner(table)

function addToMatrix(user_input,dataset) {
    console.log(`${user_input} was placed at ${dataset.row} row, ${dataset.column} column`)
    table[dataset.row-1][dataset.column-1] = user_input
    // console.table(table)
    console.log(checkWinner(table))

}




