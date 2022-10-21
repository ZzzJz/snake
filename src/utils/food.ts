
class Food{
  positionX:number = 0
  positionY:number = 0
  constructor(){
    this.positionChange()
  }
  positionChange(){
    this.positionX = (Math.floor(Math.random() * 34)*10)
    this.positionY = (Math.floor(Math.random() * 34)*10)
  }
}

export default Food