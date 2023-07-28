import { getInput } from "./input.js"
export let snakeSpeed=3
export const snakeBody=[{x:11,y:11}]
let newSegments=0
export function update(){
    addSegments()
    //console.log("update snake")
    const inputDirection=getInput()
    for(let i=snakeBody.length-2;i>=0;i--)
    {
    snakeBody[i+1]={...snakeBody[i]}
    }
    snakeBody[0].x+=inputDirection.x
    snakeBody[0].y+=inputDirection.y
}
export function draw(gameBoard){
    // console.log("draw snake")
    snakeBody.forEach(segment=>{
        const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    }
    )
    const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=snakeBody[0].y
        snakeElement.style.gridColumnStart=snakeBody[0].x
        snakeElement.classList.add('snakeHead')
        gameBoard.appendChild(snakeElement)
}
export function expandSnake(amount)
{
    newSegments+=amount
}
export function onSnake(position)
{
    return snakeBody.some(segment=>{
        // if (segment.x===position.x && segment.y === position.y )
        //     return true
        return comparePos(segment,position)
    })
}
function comparePos(pos1,pos2)
{
    return pos1.x===pos2.x && pos1.y === pos2.y 
}
function addSegments(){
    for(let i=0;i<newSegments;i++)
    {
        snakeBody[snakeBody.length]={...snakeBody[snakeBody.length-1]}
    }
    newSegments=0
}
export function outsideGrid(position)
{
    if(position.x<1||position.x>21||position.y<1||position.y>21)
        return true
}
export function getSnakeHead()
{
    return snakeBody[0]
}
export function snakeIntersection(snakeBody)
{
    for(let i=1;i<snakeBody.length;i++)
    {
        if(snakeBody[i].x===snakeBody[0].x && snakeBody[i].y===snakeBody[0].y)
            return true
    }
}
export function changeSpeed(score)
{
    if(score%5==0)
        snakeSpeed+=2
}