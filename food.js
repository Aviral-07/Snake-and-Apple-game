import { expandSnake, onSnake,changeSpeed } from "./snake.js"
 //let food={x:2,y:2}
const GRID_SIZE=21
export let score=0
let  food = randomFoodPosition()
const EXPANSION=3

export function update(){
    console.log(score)//to show the score
    if(onSnake(food))
    {
        changeSpeed(score)
        score++
        scorecard.innerHTML="SCORE: "+ score
        expandSnake(EXPANSION)
        food=randomFoodPosition()
    }
   
}
export function draw(gameBoard){
        const foodElement=document.createElement('div')
        foodElement.style.gridRowStart=food.y
        foodElement.style.gridColumnStart=food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }
function randomFoodPosition()
{
    let newFood
    while(newFood==null||onSnake(newFood))
    {
        newFood=randomFoodGenerator()
    }
    return newFood
}

function randomFoodGenerator()
{
    return{
        x: Math.floor(Math.random()* GRID_SIZE)+1,
        y: Math.floor(Math.random()* GRID_SIZE)+1
    }
}