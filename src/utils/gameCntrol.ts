import Food from "./food"
import Score from "./score"
import Snake from "./snake"
class GameControl{
  direction:string = ''
  food = new Food()
  score = new Score(0,1,2)
  snake = new Snake()
  constructor(){
  }
  run(){
    switch (this.direction) {
      case 'ArrowRight':
        this.moveSnakeBody()
        this.snake.positionArr[0].x+=10
        break;
      case 'ArrowLeft':
        this.moveSnakeBody()
        this.snake.positionArr[0].x-=10
        break;
      case 'ArrowUp':
        this.moveSnakeBody()
        this.snake.positionArr[0].y-=10
        break;
      case 'ArrowDown':
        this.moveSnakeBody()
        this.snake.positionArr[0].y+=10
        break;
    }
    for(let i = this.snake.positionArr.length-1;i>0;i--){
      if(this.snake.positionArr[i].x===this.snake.positionArr[0].x&&this.snake.positionArr[i].y===this.snake.positionArr[0].y){
        throw new Error("撞自己了");
      }
    }
    this.snake.crossBorder()
    if(this.snake.positionArr[0].x === this.food.positionX && this.snake.positionArr[0].y === this.food.positionY){
      this.addBody()
      this.food.positionChange()
      this.score.addScore()
    }
    setTimeout(this.run.bind(this),300-(this.score.level-1)*30)
  }
  moveSnakeBody(){
    for(let i = this.snake.positionArr.length-1;i>0;i--){
      this.snake.positionArr[i] = JSON.parse(JSON.stringify(this.snake.positionArr[i-1]))
    }
  }
  move(){
    document.addEventListener('keyup',this.keyDownHandler.bind(this))
    this.run()
  }
  keyDownHandler(e:KeyboardEvent){
    if((this.direction==='ArrowRight'&&e.key==='ArrowLeft')||(this.direction==='ArrowLeft'&&e.key==='ArrowRight')||(this.direction==='ArrowUp'&&e.key==='ArrowDown')||(this.direction==='ArrowDown'&&e.key==='ArrowUp')){
      return
    }
    this.direction = e.key
  }
  addBody(){
    switch (this.direction) {
      case 'ArrowRight':
        this.snake.positionArr.push({
          x:this.snake.positionArr[this.snake.positionArr.length-1].x-10,
          y:this.snake.positionArr[this.snake.positionArr.length-1].y,
        })
        break;
      case 'ArrowLeft':
        this.snake.positionArr.push({
          x:this.snake.positionArr[this.snake.positionArr.length-1].x+10,
          y:this.snake.positionArr[this.snake.positionArr.length-1].y,
        })
        break;
      case 'ArrowUp':
        this.snake.positionArr.push({
          x:this.snake.positionArr[this.snake.positionArr.length-1].x,
          y:this.snake.positionArr[this.snake.positionArr.length-1].y+10,
        })
        break;
      case 'ArrowDown':
        this.snake.positionArr.push({
          x:this.snake.positionArr[this.snake.positionArr.length-1].x,
          y:this.snake.positionArr[this.snake.positionArr.length-1].y-10,
        })
        break;
    }
  }
}

export default GameControl