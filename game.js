import {update as updateSnake,draw as drawSnake,snakeSpeed,outsideGrid,getSnakeHead,snakeIntersection,snakeBody} from "./snake.js"
import {update as updateFood,draw as drawFood,score} from "./food.js"
let lastRenderTime=0
let gameOver=false
const gameBoard=document.getElementById('game-board')
const sc=document.getElementById('scorecard')
function main(currentTime)
{
    snakeDeath()
    if(gameOver)
    {
        return alert('GAME OVER,  Your Score: '+score)
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender<1/snakeSpeed) return
    //console.log("render")
    lastRenderTime=currentTime
    //document.write('SCORE:',score)
    update()
    draw()
}
window.requestAnimationFrame(main)
function update()
{
    updateSnake()
    updateFood()
}
function draw()
{
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function snakeDeath()
{
    gameOver=outsideGrid(getSnakeHead()) || snakeIntersection(snakeBody)
}