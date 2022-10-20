import Food from "./food"
import Score from "./score"
import Snake from "./snake"
class GameControl{
  direction:string = ''
  food = new Food()
  score = new Score(0,1,5)
  snake = new Snake()
  constructor(){
    this.move()
  }
  directionChange(){
    switch (this.direction) {
      case 'ArrowRight':
        for(let i = this.snake.positionArr.length-1;i>0;i--){
          this.snake.positionArr[i] = this.snake.positionArr[i-1]
        }
        this.snake.positionArr[0].x+=11
        break;
      case 'ArrowLeft':
        for(let i = this.snake.positionArr.length-1;i>0;i--){
          this.snake.positionArr[i] = this.snake.positionArr[i-1]
        }
        this.snake.positionArr[0].x-=11
        break;
      case 'ArrowUp':
        for(let i = this.snake.positionArr.length-1;i>0;i--){
          this.snake.positionArr[i] = this.snake.positionArr[i-1]
        }
        this.snake.positionArr[0].y-=11
        break;
      case 'ArrowDown':
        for(let i = this.snake.positionArr.length-1;i>0;i--){
          this.snake.positionArr[i] = this.snake.positionArr[i-1]
        }
        this.snake.positionArr[0].y+=11
        break;
    }
  }
  move(){
    document.addEventListener('keyup',this.keyDownHandler.bind(this))
    let that = this
    setInterval(()=>{
      that.directionChange()
    },300)
  }
  keyDownHandler(e:KeyboardEvent){
    this.direction = e.key
    this.directionChange()
  }
}

export default GameControl